import React from "react";
import IMG2 from "../../assets/images/vegis.png";
import IMG3 from "../../assets/images/lending-app.png";
import IMG4 from "../../assets/images/dictionary.png";
import IMG5 from "../../assets/images/weather.png";
import IMG1 from "../../assets/images/todo.png";
import IMG6 from "../../assets/images/movie.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Todo",
    tech: "React & Redux in TypeScript",
    github: "https://github.com/leilamahmoudi/vegis",
    demo: "https://vegist-leila.netlify.app/",
  },
  {
    id: 2,
    img: IMG2,
    title: "Vegis",
    tech: "Javascript, React, Sass, PropTypes",
    github: "https://github.com/leilamahmoudi/vegis",
    demo: "https://vegist-leila.netlify.app/",
  },
  {
    id: 3,
    img: IMG3,
    title: "Lending-app",
    tech: "MongoDB,Express.js,React ,Node.js",
    github: "https://github.com/FeNatalia/lending-app",
    demo: "https://lending-app-codezilla.herokuapp.com/",
  },
  {
    id: 4,
    img: IMG4,
    title: "Dictionary",
    tech: "React, Css",
    github: "https://github.com/leilamahmoudi/dictionary-project",
    demo: "https://dictionary-leila.netlify.app/",
  },
  {
    id: 5,
    img: IMG5,
    title: "Weather",
    tech: "HTML, Css, Javascript",
    github: "https://github.com/leilamahmoudi/test_project",
    demo: "https://weather-ver1-leila.netlify.app/",
  },

  {
    id: 6,
    img: IMG6,
    title: "personal Movie Collection",
    tech: "MongoDB,Express.js,React ,Node.js",
    github: "https://github.com/leilamahmoudi/personalMovieCollection",
    demo: "https://vegist-leila.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{tech}</h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
