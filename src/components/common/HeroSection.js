import React from "react";
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <div className="bg-light text-dark px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold fadeIn">Welcome to My Portfolio</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4 fadeIn" style={{ animationDelay: "0.5s" }}>
            Hi, I'm Ashish Karamchandani, a passionate developer focused on creating innovative solutions with modern technologies like React, Node.js, and .NET.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {/* Use smooth scroll to navigate to the Projects section */}
            <Link to="projects" smooth={true} duration={500}>
              <button type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold">
                See My Work
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        /* General light theme styling */
        body {
          background-color: #f8f9fa;  /* Light background */
          color: #343a40;  /* Dark text for readability */
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* Hero Section */
        .bg-light {
          background-color: #f8f9fa !important;
        }

        .fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .btn-outline-primary {
          border-color: #007bff;
          color: #007bff;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: white;
        }

        .btn-outline-secondary {
          border-color: #6c757d;
          color: #6c757d;
        }

        .btn-outline-secondary:hover {
          background-color: #6c757d;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
