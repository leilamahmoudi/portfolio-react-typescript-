import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMacbookLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active link" : "link"}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active link" : "link"}
      >
        <FiUser />
      </a>

      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active link" : "link"}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active link" : "link"}
      >
        <RiMacbookLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active link" : "link"}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
