import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from "../components/Project";
import { projects } from "../api";

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
      <div>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/third-man-records`}>
              Third Man Records
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/the-raconteurs`}>
              The Raconteurs
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/jack-white`}>Jack White</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/third-man-pressing`}>
              Third Man Pressing
            </Link>
          </li>
        </ul>

        <Route
          exact
          path={this.props.match.path}
          render={() => <h3>Please select a project</h3>}
        />
        <Route
          path={`${this.props.match.path}/:projectId`}
          render={props => <Project params={this.props.match.params} />}
        />
      </div>
    );
  }
}

export default Projects;
