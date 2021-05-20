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
                {/* <header className="py-5 bg-image-full" style={{ "background-image: url('assets/maui2.jpeg')"}} >
                    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }} />
                    <img class="img-fluid d-block mx-auto" src="assets/Portfolio Headshot.jpg" alt="Headshot" style={{ "width:250px, height:250px"}} />
                </header>

                <section class="py-5">
                    <div class="container" id="about">

                        <h1>About Me</h1>
                        <p class="lead">Life is the best when you can enjoy the journey!</p>
                        <p>I am so fortunate to call San Diego my home! Growing up in Colorado, I have always appreciated the outdoors and
                        making great friends.
                        Surfing is my favorite hobby and favorite workout. I dream about surfing when I am not coding! I have been
                        fortunate to be able to surf all over Ecuador, Costa
                        Rica, Mexico and Hawaii.
                        Traveling has always been one of my favorite hobbies, along with experiencing new cultures and people!

                        Living out true passions and making slight improvements everyday is amazing.
      </p>
                    </div>
                </section>


                <div class="py-5 bg-image-full" style="background-image: url('assets/IMG_4019.jpg');">
                    <div style="height: 200px;"></div>
                </div> */}
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>

            </div>
        </Router >

    );
}

export default App;
