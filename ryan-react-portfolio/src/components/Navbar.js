import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

//sets up our navar to navigate around the page
function NavBar() {
  return (
    <ul className="nav navbar-dark fixed-top bg-dark d-flex justify-content-center text-white">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/About">
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Portfolio">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
