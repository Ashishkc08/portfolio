import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-dark py-3">
      <div className="container">
        <p className="mb-0">© 2024 Ashish Karamchandani All Rights Reserved.</p>
        <div>
          <Link to="/home" className="text-dark mx-3">
            Home
          </Link>
          <Link to="/about" className="text-dark mx-3">
            About
          </Link>
          <Link to="/projects" className="text-dark mx-3">
            Projects
          </Link>
          <Link to="/contact" className="text-dark mx-3">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
