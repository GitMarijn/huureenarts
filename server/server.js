const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");
const MongoClient = require("mongodb").MongoClient;
const User = require("../server/models/User");
const keys = require("../server/config/keys");
const { check, validationResult } = require("express-validator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not .jpg/.jpeg or .png"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  keys.mongoURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, db) => {
    var dbase = db.db("huureenarts");
    if (err) return console.log(err);
    app.listen(8080, () => {
      console.log(`app working on ${port}`);
    });

    router.get("/users", function (req, res) {
      dbase
        .collection("users")
        .find()
        .toArray((err, result) => {
          if (!err) res.send(result);
        });
    });

    router.post(
      "/user/signup",
      upload.single("image"),
      [
        check("voornaam")
          .isLength({ min: 2 })
          .withMessage("Voornaam: Voer een geldige naam in.")
          .matches(/^[A-Za-z\s-]+$/)
          .withMessage("Voornaam: Voer hier alleen letters (A-Z) in.")
          .trim(),
        check("tussenvoegsel")
          .optional({ checkFalsy: true })
          .matches(/^[A-Za-z\s-]+$/)
          .withMessage("Tussenvoegsel: Voer hier alleen letters (A-Z) in.")
          .trim(),
        check("achternaam")
          .isLength({ min: 2 })
          .withMessage("Achternaam: Voer een geldige naam in.")
          .matches(/^[A-Za-z\s-]+$/)
          .withMessage("Achternaam: Voer hier alleen letters (A-Z) in.")
          .trim(),
        check("geboortedatum")
          .not()
          .isEmpty()
          .withMessage("Voer een geboortedatum in."),
        check("bigregnr")
          .isNumeric({ no_symbols: true })
          .withMessage("BIG-nummer: Voer hier alleen cijfers (0-9) in.")
          .isLength({ min: 11, max: 11 })
          .withMessage(
            "BIG-nummer moet uit 11 cijfers bestaan. Bestaat uw nummer uit 10 of 9 cijfers, voeg dan 1 respectievelijk 2 keer een nul toe voor het nummer."
          )
          .trim(),
        check("straatnaam")
          .isLength({ min: 2 })
          .withMessage("Voer een geldige straatnaam in.")
          .matches(/^[A-Za-z\s-]+$/)
          .withMessage("Straatnaam: Voer hier alleen letters (A-Z) in.")
          .trim(),
        check("huisnummer")
          .isNumeric({ no_symbols: true })
          .withMessage("Huisnummer: Voer hier alleen cijfers (0-9) in.")
          .trim(),
        check("postcode")
          .isPostalCode("NL")
          .withMessage("Voer een geldige postcode in.")
          .trim(),
        check("plaatsnaam")
          .isLength({ min: 2 })
          .withMessage("Voer een geldige plaatsnaam in.")
          .matches(/^[A-Za-z\s-]+$/)
          .withMessage("Plaatsnaam: Voer hier alleen letters (A-Z) in.")
          .trim(),
        check("telefoon")
          .isMobilePhone("nl-NL")
          .withMessage("Voer een geldig telefoonnummer in.")
          .isLength({ min: 2 }),
        check("email")
          .isEmail()
          .withMessage("Voer een geldig emailadres in.")
          .bail()
          .trim()
          .normalizeEmail(),
        check("email2").isEmail().normalizeEmail().trim(),
      ],
      (req, res) => {
        const errors = validationResult(req);
        const extractedErrors = [];
        errors
          .array()
          .map((err) => extractedErrors.push({ [err.param]: err.msg }));
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: extractedErrors });
        }

        const {
          geslacht,
          voornaam,
          tussenvoegsel,
          achternaam,
          geboortedatum,
          bigregnr,
          straatnaam,
          huisnummer,
          toevoeging,
          postcode,
          plaatsnaam,
          telefoon,
          email,
          email2,
          BLS,
          ALS,
          specialisme,
        } = req.body;

        const profilePic = req.file;

        if (!profilePic) {
          return res.send({
            success: false,
            message: "Error: Foto is vereist",
          });
        }

        dbase
          .collection("users")
          .find()
          .toArray((err, result) => {
            let existingUser = result.filter((user) => user.email == email);
            if (existingUser.length > 0)
              return res.send({
                success: false,
                message: "Error: Emailadres al in gebruik.",
              });

            let newImg = fs.readFileSync(req.file.path);
            let encImg = newImg.toString("base64");

            const user = new User();
            user.geslacht = geslacht;
            user.voornaam = voornaam;
            user.tussenvoegsel = tussenvoegsel;
            user.achternaam = achternaam;
            user.geboortedatum = geboortedatum;
            user.bigregnr = bigregnr;
            user.straatnaam = straatnaam;
            user.huisnummer = huisnummer;
            user.toevoeging = toevoeging;
            user.postcode = postcode;
            user.plaatsnaam = plaatsnaam;
            user.telefoon = telefoon;
            user.email = email;
            user.email2 = email2;
            user.BLS = BLS;
            user.ALS = ALS;
            user.specialisme = specialisme;
            user.profilePic.data = Buffer.from(encImg, "base64");
            user.profilePic.contentType = req.file.mimetype;

            dbase.collection("users").insertOne(user, (err, result) => {
              if (err) {
                console.log(err);
                res.send({
                  success: false,
                  message: "Error: Server error",
                });
                fs.remove(req.file.path, function (err) {
                  if (err) {
                    console.log(err);
                  }
                });
              }
              res.send({
                success: true,
                message: "User has been saved on server",
              });
            });
          });
      }
    );

    app.use("/api", router);
  }
);
