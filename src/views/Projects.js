import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from "../components/Project";

function Projects({ match }) {
  const projects = [
    {
      name: "Third Man Records",
      id: "third-man-records",
      imgPath: "../images/tmr-screenshot.png"
    },
    {
      name: "The Raconteurs",
      id: "the-raconteurs",
      imgPath: "../images/racs-screenshot.png"
    },
    {
      name: "Jack White",
      id: "jack-white",
      imgPath: "../images/jw-screenshot.png"
    },
    {
      name: "Third Man Pressing",
      id: "third-man-pressing",
      imgPath: "../images/tmp-screenshot.png"
    }
  ];

  return (
    <div>
      <ul>
        {projects.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/projects/${id}`}>{name}</Link>
          </li>
        ))}
        <li>
          {/* <Link to={`${match.url}/thirdmanrecords`}>Third Man Records</Link> */}
        </li>
        <li>
          {/* <Link to={`${match.url}/theractonteurs`}>The Raconteurs</Link> */}
        </li>
        <li>{/* <Link to={`${match.url}/jackwhite`}>Jack White</Link> */}</li>
        <li>
          {/* <Link to={`${match.url}/thirdmanpressing`}>Third Man Pressing</Link> */}
        </li>
      </ul>

      <Route
        path={`${match.path}/:projectId`}
        component={Project}
        projects={projects}
      />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a project.</h3>}
      />
    </div>
  );
}

export default Projects;
