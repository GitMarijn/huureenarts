import React from "react";
import "../assets/styles/App.css";
import "../assets/styles/style_HuurEenArts.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AllUsers from "../components/AllUsers";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import LoadingSpinner from "../components/LoadingSpinner";

class HuurEenArts extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    document.title = "Huur een arts - Huur een arts";
  }

  render() {
    if (this.props.usersIsLoading) return <LoadingSpinner />;
    return (
      <React.Fragment>
        <Header />

        <div className="heading_text col-sm-12 huureenarts-heading">
          <span>Huur een arts</span>
        </div>

        <div className="copy-text col-sm-12">
          <span>
            Organiseer jij een foto- of video shoot, filmopname of TV show
            waarbij veiligheid voorop staat? Uiteraard doe je er alles aan om
            het zo veilig mogelijk te laten verlopen. Om de risico’s zo klein
            mogelijk te houden is het fijn (en soms verplicht) om een
            gediplomeerd arts aanwezig te hebben op de set. Zo is er altijd
            iemand in de buurt die eerste hulp kan verlenen, wanneer dingen toch
            even anders lopen dan gepland. Een fijn gevoel voor iedereen op de
            set!
            <br></br>
            <br></br>
            Wil je een arts casten voor jouw commercial of TV-show? Iemand die
            advies kan geven of echte medische handelingen kan uitvoeren? Ook
            dat bieden we aan binnen ons bestand. Mannen en vrouwen met diverse
            specialismes zijn beschikbaar als adviseur op de set of als figurant
            in shoots.
            <br></br>
            <br></br>
            Alle artsen in ons bestand zijn BIG-geregistreerd en momenteel
            werkzaam in de gezondheidszorg. Ze beschikken over alle
            noodzakelijke kennis om eerste hulp te verlenen en belangrijke
            medische adviezen on the spot te geven.
            <br></br>
            <br></br>
            Hieronder vind je alle ingeschreven artsen. Neem alvast een kijkje,
            laat ons weten wie bij jouw wensen past en neem contact op voor een
            vrijblijvend voorstel waarbij we graag met je meedenken.
          </span>
        </div>

        <AllUsers
          users={this.props.users.sort(function (a, b) {
            let userA = a.achternaam;
            let userB = b.achternaam;
            return userA < userB ? -1 : userA > userB ? 1 : 0;
          })}
        />

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    usersIsLoading: state.usersIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(actionCreator.fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HuurEenArts);
