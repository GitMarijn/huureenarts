import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/style_LandingPage.css";
import "../assets/styles/App.css";
import logo1 from "../assets/images/aptamil_logo.png";
import logo2 from "../assets/images/heineken.png";
import logo3 from "../assets/images/brooks_logo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="landingpage landingpage_container">
        <Link to="/huureenarts" className="landingpage left">
          <span>Huur een arts</span>
        </Link>
        <i className="fa fa-chevron-down"></i>
        <Link to="/ikbenarts" className="landingpage right">
          <span>Ik ben arts</span>
        </Link>
      </div>

      <div className="heading_text" id="wie_zijn_wij">
        <span>Wie zijn wij</span>
      </div>

      <div className="wiezijnwij_text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
          nisl lobortis, convallis ante ut, pellentesque mi. Sed at faucibus ex.
          Proin sed tellus eget enim dignissim molestie a quis lacus. Praesent
          elementum, orci et mattis convallis, nulla nibh vestibulum mi, vel
          consequat nulla est et dolor. Fusce ac pellentesque neque. Etiam a
          nunc at nulla porta sodales. In hac habitasse platea dictumst. Vivamus
          viverra quam neque, ut posuere dui consectetur non. Nulla tempus
          elementum velit sed efficitur. Donec ac tellus lorem. Aliquam sed
          libero ut enim sollicitudin sagittis. Phasellus condimentum finibus
          elit, et ultrices lorem faucibus at. Praesent pellentesque ligula sed
          sapien viverra, et consectetur mauris consectetur. Nam commodo vel
          lorem quis egestas. Quisque mollis, ante eu eleifend feugiat, magna
          arcu viverra risus, et posuere mauris lacus quis lorem. Morbi lectus
          massa, feugiat sit amet auctor sed, luctus eget lorem. Morbi consequat
          justo eu efficitur mattis. Nulla luctus finibus nibh at viverra.
          Aliquam vel urna molestie, fermentum risus vitae, vestibulum risus.
          Nulla vitae ex sit amet mauris euismod efficitur. Integer metus enim,
          imperdiet id dignissim a, auctor id diam. Nunc cursus dui sed lectus
          mollis, quis dignissim nisi rhoncus. Morbi auctor lorem urna, sit amet
          varius leo consequat eget. Fusce ut eros quis felis consequat semper a
          et elit. Praesent iaculis posuere rutrum. Mauris finibus luctus eros,
          non semper eros faucibus ac. In porttitor quam eu gravida mattis.
          Nulla at efficitur massa. Nullam interdum magna in risus congue,
          cursus ornare tortor tempor. Aenean condimentum porta est at dapibus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Praesent enim lorem, fringilla in mollis a,
          ultrices sit amet elit. Vestibulum vitae lectus accumsan, gravida
          risus quis, scelerisque dui. Maecenas faucibus tincidunt leo, et
          blandit leo dapibus non. Maecenas et massa aliquet, aliquam ex vitae,
          tincidunt quam. Vestibulum quis consectetur mauris, eu euismod dui.
          Suspendisse viverra varius euismod.
        </span>
      </div>

      <div className="heading_text" id="diensten">
        <span>Diensten</span>
      </div>

      <div className="wiezijnwij_text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
          nisl lobortis, convallis ante ut, pellentesque mi. Sed at faucibus ex.
          Proin sed tellus eget enim dignissim molestie a quis lacus. Praesent
          elementum, orci et mattis convallis, nulla nibh vestibulum mi, vel
          consequat nulla est et dolor. Fusce ac pellentesque neque. Etiam a
          nunc at nulla porta sodales. In hac habitasse platea dictumst. Vivamus
          viverra quam neque, ut posuere dui consectetur non. Nulla tempus
          elementum velit sed efficitur. Donec ac tellus lorem. Aliquam sed
          libero ut enim sollicitudin sagittis. Phasellus condimentum finibus
          elit, et ultrices lorem faucibus at. Praesent pellentesque ligula sed
          sapien viverra, et consectetur mauris consectetur. Nam commodo vel
          lorem quis egestas. Quisque mollis, ante eu eleifend feugiat, magna
          arcu viverra risus, et posuere mauris lacus quis lorem. Morbi lectus
          massa, feugiat sit amet auctor sed, luctus eget lorem. Morbi consequat
          justo eu efficitur mattis. Nulla luctus finibus nibh at viverra.
          Aliquam vel urna molestie, fermentum risus vitae, vestibulum risus.
          Nulla vitae ex sit amet mauris euismod efficitur. Integer metus enim,
          imperdiet id dignissim a, auctor id diam. Nunc cursus dui sed lectus
          mollis, quis dignissim nisi rhoncus. Morbi auctor lorem urna, sit amet
          varius leo consequat eget. Fusce ut eros quis felis consequat semper a
          et elit. Praesent iaculis posuere rutrum. Mauris finibus luctus eros,
          non semper eros faucibus ac. In porttitor quam eu gravida mattis.
          Nulla at efficitur massa. Nullam interdum magna in risus congue,
          cursus ornare tortor tempor. Aenean condimentum porta est at dapibus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Praesent enim lorem, fringilla in mollis a,
          ultrices sit amet elit. Vestibulum vitae lectus accumsan, gravida
          risus quis, scelerisque dui. Maecenas faucibus tincidunt leo, et
          blandit leo dapibus non. Maecenas et massa aliquet, aliquam ex vitae,
          tincidunt quam. Vestibulum quis consectetur mauris, eu euismod dui.
          Suspendisse viverra varius euismod.
        </span>
      </div>

      <div className="heading_text" id="ervaringen">
        <span>Ervaringen</span>
      </div>

      <div className="ervaringen_text">
        <span>
          Hieronder enkele voorbeelden van partijen die gebruik hebben gemaakt
          van onze diensten.
        </span>
      </div>

      <div className="ervaringen_container">
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

export default LandingPage;
