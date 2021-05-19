import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Resume from "./components/resume";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Home />

        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <About />
        </Route>
        <Route exact path="/resume">
          <About />
        </Route>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
