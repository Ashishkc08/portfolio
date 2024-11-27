import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title text-center">Let's Connect!</h2>
        <p className="lead text-center">
          I'm always excited to connect with fellow tech enthusiasts, collaborators, and professionals. 
          Whether you want to discuss a project, explore ideas, or simply chat about technology, feel free to reach out to me. 
          I also welcome feedback to help me grow and improve!
        </p>

        <div className="card-container">
          {/* Contact Information */}
          <div className="contact-card">
            <h5>Contact Me</h5>
            <div className="email-container">
              <span className="email-text">
                <a href="mailto:ashishwork08@gmail.com" className="email-link">
                  ashishwork08@gmail.com
                </a>
              </span>
              <CopyToClipboard text="ashishwork08@gmail.com" onCopy={handleCopy}>
                <button className="btn-copy">
                  <FaCopy />
                  {copied ? <span> Copied!</span> : <span> Copy Email</span>}
                </button>
              </CopyToClipboard>
            </div>
          </div>

          {/* Online Links */}
          <div className="contact-card">
            <h5>Find Me Online</h5>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ashish-karamchandani/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Ashishkc08"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .contact-page {
          background: #f4f4f9; /* Soft light grey */
          padding: 60px 0;
          color: #333; /* Neutral dark grey */
        }

        .container {
          max-width: 800px;
          margin: auto;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #000; /* Black for emphasis */
        }

        .lead {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #666; /* Muted grey for text */
        }

        .card-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-card {
          background: #ffffff; /* Pure white */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          border-radius: 10px;
          padding: 20px;
          width: 100%;
          max-width: 360px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .contact-card h5 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333; /* Neutral grey */
        }

        .email-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px; /* Spacing between email and button */
          margin-top: 15px;
        }

        .email-link {
          color: #000; /* Black for contrast */
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        .btn-copy {
          background-color: #28a745; /* Green for success */
          color: #ffffff; /* White text */
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .btn-copy:hover {
          background-color: #218838; /* Darker green on hover */
        }

        .btn-copy span {
          margin-left: 8px;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-link {
          font-size: 1.2rem;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .social-link.linkedin {
          background-color: #0077b5; /* LinkedIn blue */
        }

        .social-link.linkedin:hover {
          background-color: #005582; /* Darker LinkedIn blue */
          transform: translateY(-3px);
        }

        .social-link.github {
          background-color: #24292f; /* GitHub grey */
        }

        .social-link.github:hover {
          background-color: #1b1f23; /* Darker GitHub grey */
          transform: translateY(-3px);
        }

        .social-link svg {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
