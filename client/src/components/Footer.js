import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer col-sm-12" id="contact">
        <div className="heading_text footer-heading col-sm-12">Contact</div>
        <span className="footer-text col-sm-12">
          Voor contact kan je ons mailen op{"  "}
          <a
            href="mailto:info@huureenarts.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@huureenarts.nl
          </a>
          .
        </span>
        <div className="footer-bottom col-sm-12">
          <a href="#">Privacyverklaring</a>
          <a href="#">Algemene voorwaarden</a>
          <span>huureenarts.nl © 2020</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
