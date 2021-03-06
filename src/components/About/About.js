// About will be a child of header and will be conditionally rendered when About is clicked in the Nav Section
import React from "react";
import "./style.css";
import ian from "../../images/Ian5.jpg";

function About() {
  return (
    <div className="row ">
      <h3
        className="Header center purple-text text-lighten-3 col s12 "
        id="about"
      >
        ABOUT ME
      </h3>
      <img
        className="col s4 push-s1 responsive-image pic z hide-on-med-and-down"
        src={ian}
      ></img>
      <section className="container flow-text aboutContainer col s6 push-s1 hide-on-med-and-down ">
        <p className="aboutMeText grey-text text-darken-3 ">
          I am a full stack developer located in the St. Louis area specializing
          in Web Design and Sales. With the goal of making a professional
          looking websites for my own musical ventures, I quickly grew a passion
          for building applications and learning new skills. I like to get to
          know my clients a little bit before designing for them so please feel
          free to contact me bellow so we can discuss your ideas!
        </p>
      </section>
      <section className="container center flow-text aboutContainer col s8 push-s2 hide-on-large-only show-on-medium-and-down ">
        <p className="aboutMeText  grey-text text-darken-3 ">
          I am a full stack developer located in the St. Louis area specializing
          in Web Design and Sales. With the goal of making a professional
          looking websites for my own musical ventures, I quickly grew a passion
          for building applications and learning new skills. I like to get to
          know my clients a little bit before designing for them so please feel
          free to contact me bellow so we can discuss your ideas!
        </p>
      </section>
    </div>
  );
}

export default About;
