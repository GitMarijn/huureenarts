import React from "react";
import "../assets/styles/App.css";
import "../assets/styles/style_IkBenArts.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class IkBenArts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      geslacht: "",
      voornaam: "",
      tussenvoegsel: "",
      achternaam: "",
      geboortedatum: "",
      bigregnr: "",
      straatnaam: "",
      huisnummer: "",
      toevoeging: "",
      postcode: "",
      plaatsnaam: "",
      telefoon: "",
      email: "",
      email2: "",
      specialisme: "",
      vaardigheid: {
        BLS: false,
        ALS: false
      },
      profilePic: null
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });

    document.title = "Ik ben arts -  Huur een arts";
  }

  loadImage = event => {
    let image = document.getElementById("output");
    let icon = document.getElementById("userIcon");
    this.setState({
      profilePic: event.target.files[0]
    });

    image.src = URL.createObjectURL(event.target.files[0]);
    icon.parentNode.removeChild(icon);
  };

  handleChecked = event => {
    let updatedCheckbox = Object.assign({}, this.state.vaardigheid, {
      [event.target.name]: event.target.checked
    });
    this.setState({
      vaardigheid: updatedCheckbox
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      isLoading: true
    });

    const formData = new FormData();

    formData.append("geslacht", this.state.geslacht);
    formData.append("voornaam", this.state.voornaam);
    formData.append("tussenvoegsel", this.state.tussenvoegsel);
    formData.append("achternaam", this.state.achternaam);
    formData.append("geboortedatum", this.state.geboortedatum);
    formData.append("bigregnr", this.state.bigregnr);
    formData.append("straatnaam", this.state.straatnaam);
    formData.append("huisnummer", this.state.huisnummer);
    formData.append("toevoeging", this.state.toevoeging);
    formData.append("postcode", this.state.postcode);
    formData.append("plaatsnaam", this.state.plaatsnaam);
    formData.append("telefoon", this.state.telefoon);
    formData.append("email", this.state.email);
    formData.append("email2", this.state.email2);
    formData.append("vaardigheid", this.state.vaardigheid);
    formData.append("specialisme", this.state.specialisme);
    formData.append("image", this.state.profilePic);

    console.log(...formData);

    fetch("/api/user/signup", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            geslacht: "",
            voornaam: "",
            tussenvoegsel: "",
            achternaam: "",
            geboortedatum: "",
            bigregnr: "",
            straatnaam: "",
            huisnummer: "",
            toevoeging: "",
            postcode: "",
            plaatsnaam: "",
            telefoon: "",
            email: "",
            email2: "",
            vaardigheid: {
              BLS: false,
              ALS: false
            },
            specialisme: "",
            profilePic: null
          });
          this.props.history.push("/ikbenarts/confirmation");
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  };

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <div>
        <Header />

        <div className="heading_text">
          <span>Ik ben arts</span>
        </div>

        <form
          id="signup-form"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <div className="form_heading">
            <span>Persoonlijk</span>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="geslacht"
              id="vrouw"
              value="vrouw"
              required
              checked={this.state.geslacht === "vrouw"}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="geslacht">
              Vrouw*
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="geslacht"
              id="man"
              value="man"
              checked={this.state.geslacht === "man"}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="man">
              Man*
            </label>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="voornaam"
                placeholder="Voornaam*"
                name="voornaam"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="tussenvoegsel"
                placeholder="tussenvoegsel"
                name="tussenvoegsel"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="achternaam"
                placeholder="Achternaam*"
                name="achternaam"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="geboortedatum"
                onFocus={e => (e.target.type = "date")}
                placeholder="Geboortedatum*"
                name="geboortedatum"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="number"
                className="form-control"
                id="bigreg"
                placeholder="BIG-registratienummer*"
                name="bigregnr"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form_heading">
            <span>Adres</span>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="straatnaam"
                placeholder="Straatnaam*"
                name="straatnaam"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="number"
                className="form-control"
                id="huisnummer"
                placeholder="Huisnummer*"
                name="huisnummer"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="toevoeging"
                placeholder="Toevoeging"
                name="toevoeging"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="postcode"
                placeholder="Postcode*"
                name="postcode"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                id="plaatsnaam"
                placeholder="Plaatsnaam*"
                name="plaatsnaam"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form_heading">
            <span>Contactgegevens</span>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="number"
                className="form-control"
                id="telefoonnummer"
                placeholder="Telefoonnummer*"
                name="telefoon"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="email"
                className="form-control"
                id="email1"
                placeholder="Emailadres*"
                name="email"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="email"
                className="form-control"
                id="email2"
                placeholder="Emailadresverificatie*"
                name="email2"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form_heading">
            <span>Vaardigheden</span>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="inlineCheckbox1"
                name="BLS"
                onChange={this.handleChecked}
                value={this.state.vaardigheid["BLS"]}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Basic Life Support Diploma
              </label>
            </div>
            <div className="form-group col-sm-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="inlineCheckbox2"
                name="ALS"
                onChange={this.handleChecked}
                value={this.state.vaardigheid["ALS"]}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Advanced Life Support Diploma
              </label>
            </div>

            <div className="form-group col-sm-4">
              <select
                className="custom-select"
                name="specialisme"
                required
                defaultValue={"DEFAULT"}
                onChange={this.handleChange}
              >
                <option value="DEFAULT" hidden>
                  Specialisme*
                </option>
                <option value="Anesthesiologie">Anesthesiologie</option>
                <option value="Bedrijfsgeneeskunde">Bedrijfsgeneeskunde</option>
                <option value="Dermatologie">Dermatologie</option>
                <option value="Gynaecologie en verloskunde">
                  Gynaecologie en verloskunde
                </option>
                <option value="Huisartsgeneeskunde">Huisartsgeneeskunde</option>
                <option value="Interne geneeskunde">Interne geneeskunde</option>
                <option value="Keel-neus-oorheelkunde (KNO)">
                  Keel-neus-oorheelkunde (KNO)
                </option>
                <option value="Kindergeneeskunde">Kindergeneeskunde</option>
                <option value="Medische microbiologie">
                  Medische microbiologie
                </option>
                <option value="Neurologie">Neurologie</option>
                <option value="Oogheelkunde">Oogheelkunde</option>
                <option value="Ouderengeneeskunde">Ouderengeneeskunde</option>
                <option value="Pathologie">Pathologie</option>
                <option value="Psychiatrie">Psychiatrie</option>
                <option value="Radiologie">Radiologie</option>
                <option value="Spoedeisende Hulp">Spoedeisende Hulp</option>
                <option value="Verzekeringsgeneeskunde">
                  Verzekeringsgeneeskunde
                </option>
                <option value="Anders">Anders</option>
              </select>
            </div>
          </div>

          <div className="form_heading">
            <span>Pasfoto</span>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-12 image_wrapper">
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={this.loadImage}
                style={{ display: "none" }}
              />
              <div className="col-sm-4 image_picker">
                <label htmlFor="file">
                  <span className="image_text">Upload (pas)foto</span>
                </label>
              </div>
              <div className="form-group col-sm-4 image_area">
                <img id="output" alt="" />
                <div className="far fa-user" id="userIcon"></div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-4 submit_button">
              <input
                type="submit"
                className="btn btn-outline-primary btn-block"
                value="Aanmelden"
              />
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default IkBenArts;
