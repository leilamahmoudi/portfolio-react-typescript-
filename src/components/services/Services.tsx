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
                development with a focus on TDD, mob programming, and applied
                learnin
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
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
                and completed some portfolios. I also learned how to work with
                APIs, how to use GitHub to commit and push my code, and how to
                eventually build and deploy my projects using Netlify.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
