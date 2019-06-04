import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
