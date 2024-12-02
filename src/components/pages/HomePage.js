import React, { useState } from "react";
import ProjectsSection from "./ProjectSection";


const HomePage = () => {
  
  const fullText = "Hi, I'm Ashish Karamchandani, a passionate developer focused on creating innovative solutions with modern technologies like React, Node.js, and .NET.";

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  

  const handleDownloadClick = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead animated-text">{fullText}</p>
          
          {/* Elegant Resume Download Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1JL4WF_6ie65VBZ-ZRS4Z8fWt0-3dzwo7"
            download="Ashish_Karamchandani_Resume.pdf"
            className="btn btn-custom mt-3"
            onClick={handleDownloadClick}
          >
            Download My Resume
          </a>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="alert alert-success mt-3" role="alert">
              Download started successfully!
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects text-center py-5">
        <div className="container">
          <ProjectsSection /> {/* Render Projects Section */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills text-center py-5">
        {/* <h2>Skills</h2> */}
        <div className="container">
          {/* Skills Grid */}

<section className="skills text-center py-5">
        <h2>Skills</h2>
        <div className="container">
          <div className="row">
            {/* Frontend Skills */}
            <div className="col-md-4">
              <h4>Frontend</h4>
              <div className="skills-icons">
                <i className="fab fa-react" title="React"></i>
                <i className="fab fa-js-square" title="JavaScript"></i>
                <i className="fab fa-html5" title="HTML5"></i>
                <i className="fab fa-css3-alt" title="CSS3"></i>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="col-md-4">
              <h4>Backend</h4>
              <div className="skills-icons">
                <i className="fab fa-node" title="Node.js"></i>
                <i className="fab fa-microsoft" title="ASP.NET"></i>
              </div>
            </div>

            {/* Database Skills */}
            <div className="col-md-4">
              <h4>Database</h4>
              <div className="skills-icons">
                <i className="fas fa-database" title="SQL"></i>
                <i className="fab fa-microsoft" title="SQL Server"></i>
              </div>
            </div>
          </div>

          {/* Other Tools/Technologies */}
          <div className="row mt-4">
            <div className="col-md-4">
              <h4>Version Control</h4>
              <div className="skills-icons">
                <i className="fab fa-github" title="GitHub"></i>
                <i className="fab fa-bitbucket" title="Bitbucket"></i>
              </div>
            </div>

            <div className="col-md-4">
              <h4>Cloud Services</h4>
              <div className="skills-icons">
                <i className="fab fa-aws" title="AWS"></i>
                <i className="fab fa-azure" title="Azure"></i>
              </div>
            </div>

            <div className="col-md-4">
              <h4>Other Tools</h4>
              <div className="skills-icons">
                <i className="fab fa-react" title="Redux"></i>
                <i className="fas fa-plug" title="REST APIs"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact text-center py-5">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate or just want to say hi, feel free to reach out!</p>
        <a href="mailto:ashishwork08@gmail.com" className="btn btn-primary">
          Email Me
        </a>
      </section>

      {/* Inline Styles */}
      <style jsx>{`
        /* General light theme styling */
        body {
          background-color: #f8f9fa;
          color: #343a40;
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* Hero Section */
        .hero {
          background-color: #f8f9fa;
          color: #343a40;
          padding: 50px 0;
        }

        .hero h1 {
          font-weight: bold;
        }

        .hero .animated-text {
          margin-top: 20px;
          color: #6c757d; /* Subtle color for text */
          font-size: 1.25rem;
          font-style: italic;
        }

        /* Elegant Resume Download Button */
        .btn-custom {
          background-color: #008080;
          width:100%;
          max-width:300px;
          color: #fff;
          font-weight: bold;
          border-radius: 50px;
          padding: 12px 25px;
          text-transform: uppercase;
          font-size: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .btn-custom:hover {
          background-color: #006666;
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .btn-custom:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
        }

        /* Success Message Styling */
        .alert-success {
          font-size: 1.1rem;
          font-weight: 600;
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
          border-radius: 0.375rem;
        }

        /* Projects Section */
        .projects {
          background-color: #f8f9fa;
          color: #343a40;
          padding: 40px 0;
        }

        .projects h2 {
          margin-bottom: 30px;
        }

        /* Skills Section */
        .skills {
          background-color: #f8f9fa;
          color: #343a40;
          padding: 40px 0;
        }

        .skills-icons {
          font-size: 2rem;
        }

        .skills-icons i {
          margin: 0 15px;
          color: #343a40;
        }

        /* Contact Section */
        .contact {
          background-color: #f8f9fa;
          color: #343a40;
          padding: 40px 0;
        }

        .contact h2 {
          margin-bottom: 20px;
        }

        .contact p {
          margin-bottom: 20px;
        }

        .contact .btn-primary {
          background-color: #008080;
          color: #ffffff;
          border: 1px solid #008080;
        }

        .contact .btn-primary:hover {
          background-color: #006666;
          border-color: #006666;
        }

        
      `}</style>
    </div>
  );
};

export default HomePage;
