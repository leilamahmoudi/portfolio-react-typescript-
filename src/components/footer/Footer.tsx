import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__log link"></a>
      <ul className="permaliks">
        <li>
          <a href="#" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#experience" className="link">
            Experience
          </a>
        </li>
        <li>
          <a href="#services" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#testimonials" className="link">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contacts" className="link">
            Contacts
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/leila.mahmoudi.7739" className="link">
          <AiOutlineFacebook />
        </a>
        <a href="https://twitter.com/leillonn" className="link">
          <FiTwitter />
        </a>
        <a href="https://www.instagram.com/leilaa.mahmoudi/" className="link">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copright">
        <small>
          &copy;This project was coded by leila mahmoudi is open-sourced on
          <a
            href="https://github.com/leilamahmoudi/portfolio-react-typescript-"
            className="link"
          >
            {""} GitHub
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
