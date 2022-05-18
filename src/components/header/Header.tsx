import React from "react";
import Buttons from "./Buttons";
import Socials from "./Socials";
import ME from "../../assets/images/me.jpg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Leila</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <div id="flip">
          <div>
            <div>Based In Stockholm</div>
          </div>
          <div>
            <div>super passionate</div>
          </div>
          <div>
            <div>eager to learn</div>
          </div>
        </div>
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
