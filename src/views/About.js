import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="AboutImg">
        <img src="/images/IMG_0425.JPG" alt="Portrait" />
      </div>
      <div className="AboutDesc">
        <p>
          Hi! I'm a web developer, photographer, and musician based in
          Nashville, TN.
        </p>
        <p>
          <Link to="/contact">Get in touch!</Link>
        </p>
      </div>
    </div>
  );
}

export default About;
