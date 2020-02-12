import React from "react";
import "../assets/styles/App.css";
import "../assets/styles/style_SignUpConfirmation.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class SignUpConfirmation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="confirmation-wrapper">
          <h4>Bedankt voor je aanmelding!</h4>
          <span>We nemen zo spoedig mogelijk contact met je op.</span>
          <i className="far fa-check-circle"></i>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default SignUpConfirmation;
