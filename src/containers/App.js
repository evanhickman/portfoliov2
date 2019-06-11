import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../views/Home";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
