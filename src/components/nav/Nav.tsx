import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMacbookLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="link">
        <AiOutlineHome />
      </a>
      <a href="#about" className="link">
        <FiUser />
      </a>
      <a href="#experience" className="link">
        <RiMacbookLine />
      </a>
      <a href="#services" className="link">
        <MdOutlineDesignServices />
      </a>
      <a href="#contact" className="link">
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
