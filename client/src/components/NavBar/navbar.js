import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Google Books Search!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={
            window.location.pathname === "/search"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Save Book
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
