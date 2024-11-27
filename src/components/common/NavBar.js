import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "10px 0" }}>
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul className="navbar-nav" style={{ display: "flex", gap: "15px" }}>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                activeClassName="active"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          transition: color 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effect */
        }

        .nav-link:hover {
          color: #008080; /* Change color on hover */
          transform: scale(1.05); /* Slightly enlarge on hover */
        }

        .nav-link.active {
          color: #005f5f; /* Change color for active link */
          font-weight: bold; /* Bold text for active link */
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
