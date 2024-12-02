import React from "react";

const ProjectCard = ({ icon, title, body, link }) => {
  const isLinkAvailable = link && link !== "#"; // Check if link is valid

  return (
    <div className="card project-card">
      <div className="card-body text-center">
        {/* Render the icon with a custom class for size */}
        <div className="icon-container">
          {React.cloneElement(icon, { className: 'icon' })}
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a
          href={isLinkAvailable ? link : "#"} 
          className={`btn btn-primary ${!isLinkAvailable ? "disabled" : ""}`}
          target={isLinkAvailable ? "_blank" : undefined} // Open in new tab if valid link
          rel={isLinkAvailable ? "noopener noreferrer" : undefined} // Security for new tab links
          onClick={(e) => !isLinkAvailable && e.preventDefault()} // Prevent click if link is not available
        >
          View Project
        </a>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .project-card {
          width: 18rem;
          height: 22rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .project-card .card-body {
          padding: 15px;
        }

        .project-card .card-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .project-card .card-text {
          font-size: 1rem;
          margin-bottom: 20px;
          color: #555;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          height: calc(1rem * 1.5 * 5);
        }

        .project-card .btn {
          margin-top: auto;
          margin-bottom: 10px;
          background-color: #008080; /* Button color updated */
          border: none;
        }

        .icon-container {
          margin-bottom: 15px;
        }

        .icon {
          font-size: 80px;
          color: #008080;
        }

        .btn.disabled {
          pointer-events: none; /* Disable button if link is not valid */
          background-color: #ccc; /* Visual cue for disabled button */
          color: #666; /* Grey out the text */
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
