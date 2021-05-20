import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">Ryan Anderson</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#about" target="">About Me</a>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="https://www.linkedin.com/in/ryan-anderson-52842784/">
                                LinkedIn
            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/Ryansswell" target="_blank">GitHub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Resume.pdf" target="_blank">Portfolio/Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}


export default Navbar;