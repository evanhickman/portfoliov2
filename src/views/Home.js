import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1 className="HomeTitle">Front End Developer</h1>
      <Link to="/projects">
        <ScrollAnimation
          className="HomeCta"
          animateIn="fadeInLeft"
          duration={2}
        >
          Projects →
        </ScrollAnimation>
      </Link>
    </div>
  );
}

export default Home;
