import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="row">
        <nav className="col-4">
          <ul className="ul-header">
            <li className="header-list">
              <NavLink
                className="link"
                activeClassName="active"
                to="/huureenarts"
              >
                Huur een arts
              </NavLink>
            </li>
            <li className="header-list">
              <NavLink
                className="link"
                activeClassName="active"
                to="/ikbenarts"
              >
                Ik ben arts
              </NavLink>
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
              <NavLink className="link" to="/huureenarts">
                Huur een arts
              </NavLink>
            </nobr>
          </li>
          <li>
            <NavLink className="link" to="/ikbenarts">
              Ik ben arts
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
