import React from "react";
import ME from "../../assets/images/me-about.jpeg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} className="about-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>EDUCATION & TRAINING</h5>
              {/* <small>+7 Years Working</small> */}
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>WORK EXPERIENCE</h5>
              {/* <small>200 Worldwide</small> */}
            </article>

            <article className="about__card">
              <MdOutlineLibraryBooks className="about__icon" />
              <h5>PROJECTS</h5>
              {/* <small>+80</small> */}
            </article>
          </div>
          <p>
            I'm a FullStack JS developer based in Stockholm with a background in
            Arts. I define myself as a super passionate, eager to learn, ready
            to grow developer who couldn't be more excited to pursue my
            ambitions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
