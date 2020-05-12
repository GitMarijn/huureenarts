const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");
const MongoClient = require("mongodb").MongoClient;
const User = require("../server/models/User");
const keys = require("../server/config/keys");

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

    router.post("/user/signup", upload.single("image"), (req, res) => {
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
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);

      if (!geslacht) {
        return res.send({
          success: false,
          message: "Error: Geslacht is required",
        });
      }
      if (!voornaam) {
        return res.send({
          success: false,
          message: "Error: Voornaam is required",
        });
      }
      if (!achternaam) {
        return res.send({
          success: false,
          message: "Error: Achternaam is required",
        });
      }
      if (!geboortedatum) {
        return res.send({
          success: false,
          message: "Error: Geboortedatum is required",
        });
      }
      if (!bigregnr) {
        return res.send({
          success: false,
          message: "Error: BIG-registratienummer is required",
        });
      }
      if (!straatnaam) {
        return res.send({
          success: false,
          message: "Error: Straatnaam is required",
        });
      }
      if (!huisnummer) {
        return res.send({
          success: false,
          message: "Error: Huisnummer is required",
        });
      }
      if (!postcode) {
        return res.send({
          success: false,
          message: "Error: Postcode is required",
        });
      }
      if (!plaatsnaam) {
        return res.send({
          success: false,
          message: "Error: Plaatsnaam is required",
        });
      }
      if (!telefoon) {
        return res.send({
          success: false,
          message: "Error: Telefoonnummer is required",
        });
      }
      if (!email) {
        return res.send({
          success: false,
          message: "Error: Email is required",
        });
      }
      if (!email2) {
        return res.send({
          success: false,
          message: "Error: Emailverificatie is required",
        });
      }
      if (!specialisme) {
        return res.send({
          success: false,
          message: "Error: Specialisme is required",
        });
      }
      if (!profilePic) {
        return res.send({
          success: false,
          message: "Error: Photo is required",
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
    });

    app.use("/api", router);
  }
);
