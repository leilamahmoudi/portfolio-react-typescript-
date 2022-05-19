import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container expeience__container">
        <div className="experience__generall">
          <h3>General</h3>
          <div className="experience__content">
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>JavaScript</h4>
              {/* <small className="text-light">Exprienced</small> */}
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>TypeScript</h4>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Fontend Develpment</h3>
          <div className="experience__content">
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>HTML</h4>
              {/* <small className="text-light">Exprienced</small> */}
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Webpack</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>jQuery</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Develpment</h3>
          <div className="experience__content">
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>NodeJS</h4>
              {/* <small className="text-light">Exprienced</small> */}
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>ExpressJS</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>REST</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>jQuery</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Tools and technologies</h3>
          <div className="experience__content">
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Mocha/Jest</h4>
              {/* <small className="text-light">Exprienced</small> */}
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>ExpressJS</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Docker</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Git+GitHub</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Cloud Platforms</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>TDD</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Photoshop</h4>
            </article>
            <article className="experinece__details">
              <FiCheckCircle className="experinece__details-icon" />
              <h4>Coreldraw</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
