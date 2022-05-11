import React from "react";
// import CV from "../../assets/images/CV.pdf";
const Buttons = () => {
  return (
    <div className="buttons">
      <a href="{CV}" download className="link btn">
        Download CV
      </a>
      <a href="#contact" className="link btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;
