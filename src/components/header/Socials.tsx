import React from "react";
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/leila-mahmoudi-96a417202/"
        target="blank"
        className="link"
      >
        <SiLinkedin />
      </a>
      <a
        href="https://github.com/leilamahmoudi"
        target="blank"
        className="link"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Socials;
