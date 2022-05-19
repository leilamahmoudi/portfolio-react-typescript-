import React from "react";
import { FaCheck } from "react-icons/fa";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h2>EDUCATION & TRAINING</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full Stack JavaScript</h3>
            <h6>School of Applied Technology {"</salt>"}</h6>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Intensive three month training program for full stack web
                development.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Focus on TDD, mob programming, and applied learnin</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Front-end web development</h3>
            <h6>SheCodes Bootcamp</h6>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                During these 9 months, I studied ReactJS, Javascript, HTML, CSS,
                and completed some portfolios.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                I also learned how to work with APIs, how to use GitHub to
                commit and push my code.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                how to eventually build and deploy my projects using Netlify.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Visual Arts</h3>
            <h6>University of Culture and Arts – Tehran</h6>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Utilized Photoshop and Illustrator in combination with
                traditional tools to create and enhance illustrations
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Experienced in multiple media, including photography, drawing,
                painting, theater set design, graphic design,
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Exhibited artist with local, regional, interior design, art
                exhibition, and children's art
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
