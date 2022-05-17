import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo link">
        LEILA
      </a>
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
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/leillonn" className="link">
          <SiTwitter />
        </a>
        <a href="https://www.instagram.com/leilaa.mahmoudi/" className="link">
          <AiFillInstagram />
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
