import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="row">
        <nav className="col-4">
          <ul className="ul-header">
            <li>
              <a href="/#wie_zijn_wij">Wie zijn wij</a>
            </li>
            <li>
              <a href="/#diensten">Diensten</a>
            </li>
            <li>
              <a href="/#ervaringen">Ervaringen</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="headercenter col-4">
          <div className="headertext_wrapper">
            <Link to="/home">
              <div className="headertext">Huur</div>
              <div className="headertext">een</div>
              <div className="headertext">arts</div>
            </Link>
          </div>
        </div>
        <div className="header-right col-4"></div>
      </header>

      <div className="mobile-nav col-12">
        <ul className="ul-mobile">
          <li>
            <a href="/#wie_zijn_wij">Wie zijn wij</a>
          </li>
          <li>
            <a href="/#diensten">Diensten</a>
          </li>
          <li>
            <a href="/#ervaringen">Ervaringen</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
