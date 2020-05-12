import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="row">
        <nav className="col-4">
          <ul className="ul-header">
            <li className="header-list">
              <a className="link" href="/#wie_zijn_wij">
                Wie zijn wij
              </a>
            </li>
            <li className="header-list">
              <a className="link" href="/#ervaringen">
                Ervaringen
              </a>
            </li>
            <li className="header-list">
              <a className="link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="headercenter col-4">
          <div className="headertext_wrapper">
            <Link className="link" to="/home">
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
            <nobr>
              <a className="link" href="/#wie_zijn_wij">
                Wie zijn wij
              </a>
            </nobr>
          </li>
          <li>
            <a className="link" href="/#ervaringen">
              Ervaringen
            </a>
          </li>
          <li>
            <a className="link" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
