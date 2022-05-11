import React from "react";
import Buttons from "./Buttons";
import Socials from "./Socials";
import ME from "../../assets/images/me.jpeg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Leila</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Buttons />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down link">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
