import React from 'react';

function ProjectCard({ title, description, demoLink, icon }) {
  // Check if demoLink is missing or a placeholder ('#')
  const isLinkAvailable = demoLink && demoLink !== '#';

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-img-top text-center">
          {icon && React.cloneElement(icon, { className: 'icon' })} {/* Apply class to icon */}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* Conditionally render and disable the button */}
          <a
            href={isLinkAvailable ? demoLink : '#'}
            className={`btn btn-primary ${!isLinkAvailable ? 'disabled' : ''}`}
            target={isLinkAvailable ? "_blank" : ""}
            rel={isLinkAvailable ? "noopener noreferrer" : ""}
            style={{ pointerEvents: isLinkAvailable ? 'auto' : 'none' }} // Disable the link if not available
          >
            {isLinkAvailable ? 'View Project' : 'Link Not Available'}
          </a>
        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-img-top {
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-body {
          padding: 15px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 10px;
        }

        .card-text {
          font-size: 1rem;
          color: #555;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin-bottom: 15px;
        }

        .btn {
          background-color: #008080;
          color: #fff;
          font-weight: bold;
          padding: 8px 15px;
          border-radius: 5px;
          display: block; /* Center the button */
          margin: 0 auto; /* Center the button horizontally */
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #006666;
          color: #fff;
        }

        .btn.disabled,
        .btn:disabled {
          background-color: #cccccc;
          color: #666666;
          pointer-events: none;
        }

        .col-md-4 {
          padding: 10px;
        }

        .icon {
          font-size: 100px; /* Adjust the icon size */
          color: #008080;  /* Optional: set icon color */
        }
      `}</style>
    </div>
  );
}

export default ProjectCard;
