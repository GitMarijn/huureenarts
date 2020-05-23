import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function LoadingSpinner() {
  return (
    <React.Fragment>
      <Header />
      <div className="lds-container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default LoadingSpinner;
