import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";
import "./Project.css";

function Project(props) {
  return (
    <div className="Project">
      <LazyLoadImage
        src={props.image}
        placeholderSrc={props.image}
        // effect="opacity"
      />

      <p className="ProjectLink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </p>
      <p className="ProjectName">{props.name}</p>
      <p className="ProjectTech">{props.tech}</p>
      <p className="ProjectDesc">{props.desc}</p>
    </div>
  );
}

export default Project;
