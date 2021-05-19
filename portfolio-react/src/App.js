import { HashRouter as Router, Route } from "react-router-dom";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Resume from "./components/resume";
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />

      </Route>
      <Main>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <About />
        </Route>
        <Route exact path="/resume">
          <About />
        </Route>

      </Main>
      <Footer />
    </Router>
  );
}

export default App;
