import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/style_LandingPage.css";
import "../assets/styles/App.css";
import logo1 from "../assets/images/aptamil_logo.png";
import logo2 from "../assets/images/heineken.png";
import logo3 from "../assets/images/brooks_logo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

class LandingPage extends React.Component {
  componentDidMount() {
    document.title = "Huur een arts - Home";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="landingpage landingpage_container">
          <Link to="/huureenarts" className="landingpage left link">
            <span>Huur een arts</span>
          </Link>
          <i className="fa fa-chevron-down"></i>
          <Link to="/ikbenarts" className="landingpage right link">
            <span>Ik ben arts</span>
          </Link>
        </div>

        <div className="heading_text" id="wie_zijn_wij">
          <span>Wie zijn wij</span>
        </div>

        <div className="wiezijnwij_text col-sm-12">
          <span>
            Bij Huureenarts.nl kun je terecht voor het huren van
            BIG-geregistreerde en BLS-gecertificeerde artsen die zowel achter
            als voor de schermen inzetbaar zijn voor het verlenen van eerste
            hulp bij foto- en videoshoots en TV-, film- en commercialopnames.
            Denk bijvoorbeeld aan de opname van risicovolle stunts,
            sportactiviteiten, experimenten of programma’s waarbij kwetsbare
            groepen zoals ouderen, baby’s of mensen met een beperking worden
            ingezet.
          </span>
          <br></br>
          <br></br>
          <span>
            Tevens kunnen artsen worden ingehuurd om voor de camera te staan als
            expert of medisch deskundige voor bijvoorbeeld een rol in een
            ziekenhuisserie, film of commercial voor medische producten. Met een
            diversiteit aan specialismes en kwaliteiten kunnen we voor iedere
            rol een passende arts vinden.
          </span>
          <br></br>
          <br></br>
          <span>
            Ben je op zoek naar een arts voor jouw productie? Neem dan{" "}
            <Link to="/huureenarts">hier</Link> een kijkje of verstuur een
            aanvraag via de{" "}
            <a
              href="mailto:info@huureenarts.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              mail
            </a>
            .
          </span>
          <br></br>
          <br></br>
          <span>
            Ben je zelf arts en lijkt het je leuk om een keer een opname bij te
            wonen of zelfs een rol te vervullen als arts in een film of serie?
            Schrijf je dan <Link to="/ikbenarts#top">hier</Link> in.
          </span>
        </div>

        <div className="heading_text" id="ervaringen">
          <span>Ervaringen</span>
        </div>

        <div className="ervaringen_text col-sm-12">
          <span>
            Hieronder enkele voorbeelden van partijen die gebruik hebben gemaakt
            van onze diensten.
          </span>
        </div>

        <div className="ervaringen_container col-sm-12">
          <div className="ervaringen_sample">
            <img src={logo2} alt="heineken_logo" />
          </div>
          <div className="ervaringen_sample">
            <img src={logo1} alt="aptamil_logo" />
          </div>
          <div className="ervaringen_sample">
            <img src={logo3} alt="brooks_logo" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
