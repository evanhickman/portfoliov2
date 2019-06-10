import React from "react";
import { Route, NavLink } from "react-router-dom";
import Project from "../components/Project";
import { projects } from "../api";
import "./Projects.css";

class Projects extends React.Component {
  state = {
    pages: []
  };

  componentDidMount() {
    this.setState({ pages: projects });
  }

  render() {
    const pages = this.state;

    if (pages.length === 0) {
      return null;
    }

    return (
      <div className="Projects">
        <ul className="ProjectsList">
          <li className="ProjectsListItem">
            <NavLink
              to={`${this.props.match.url}/third-man-records`}
              activeClassName="active"
            >
              thirdmanrecords.com
            </NavLink>
          </li>
          <li className="ProjectsListItem">
            <NavLink
              to={`${this.props.match.url}/the-raconteurs`}
              activeClassName="active"
            >
              theraconteurs.com
            </NavLink>
          </li>
          <li className="ProjectsListItem">
            <NavLink
              to={`${this.props.match.url}/jack-white`}
              activeClassName="active"
            >
              jackwhiteiii.com
            </NavLink>
          </li>
          <li className="ProjectsListItem">
            <NavLink
              to={`${this.props.match.url}/third-man-pressing`}
              activeClassName="active"
            >
              thirdmanpressing.com
            </NavLink>
          </li>
        </ul>

        <div className="ProjectsRoutes">
          <Route
            exact
            path={this.props.match.path}
            render={() => <h2 className="ProjectsPrompt">Select a project</h2>}
          />

          {this.state.pages.map(page => {
            return (
              <Route
                path={`${this.props.match.path}/${page.id}`}
                key={page.id}
                render={props => (
                  <Project
                    {...props}
                    name={page.name}
                    image={page.imgPath}
                    desc={page.desc}
                    link={page.link}
                    tech={page.tech}
                  />
                )}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
