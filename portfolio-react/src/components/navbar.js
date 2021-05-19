import React from "react";

// function Navbar(props) {
const Navbar = props => {
    console.log(props);
    return (
        <nav>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="https://www.ebay.com/b/Milton-Bradley-Memory-Board-Traditional-Games/2550/bn_1914568">
                    <img src="./Memory1980.jpg" alt="Classic Memory Game circa 1980" />
                </a>
                <span className="navbar-text">
                    <div className="card-body">
                        <h2>Ryan Anderson</h2>
                    </div>
                </span>
                <form className="form-inline">
                    <input
                        onChange={props.x}
                        value={props.value}
                        name="search"
                        type="search"
                        className="form-control mr-sm-2"
                        id="search"
                        aria-label="Search"
                        placeholder="Giphy Topic Search" />
                    <button onClick={props.y} class="btn btn-outline-success my-2 my-sm-0" type="submit">About</button>
                </form>
            </nav>
            <nav className="navbar navbar-light bg-light align-center">
                <span className="navbar-text ">
                    <div className="card-body d-flex ">
                        <h1 className="card-text">LinkedIn</h1>
                    </div>
                </span>
            </nav>
        </nav>
    );
}

export default Navbar;