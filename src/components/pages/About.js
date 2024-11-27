import React from 'react'
import SkillsCard from '../common/SkillsCard'

function About() {
  return (
    <div className="about-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">About Me</h2>

        <div className="row">
          <div className="col-md-12">
            <p className="lead">
              Hi, I'm Ashish Karamchandani, a passionate software engineer with a background in Computer Science. 
              I am currently working as an Associate Software Engineer at Nagarro, where I have been involved in 
              developing, testing, and reviewing client-side and server-side applications. I enjoy learning new 
              technologies and strive to write clean, maintainable code.
            </p>
            <p className="lead">
              I graduated with a BTech in Computer Science from Oriental College of Technology, Bhopal, and I have 
              gained hands-on experience in various programming languages, frameworks, and tools. Outside of work, I 
              enjoy reading books related to finance and exploring new trends in technology.
            </p>
          </div>
        </div>
        <section className="skills text-center py-5">
        <h2>My Skills</h2>
        <SkillsCard />
      </section>
        {/* Core Values Section */}
        <div className="row">
          <div className="col-md-6">
            <h4 className="subheading text-center mb-4">My Core Values</h4>
            <ul className="core-values">
              <li>Continuous learning and improvement</li>
              <li>Teamwork and collaboration</li>
              <li>Innovative problem solving</li>
              <li>Clear communication and transparency</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Core Values" className="img-fluid about-img" />
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div className="row">
          <div className="col-md-6">
            <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hobbies & Interests" className="img-fluid about-img" />
          </div>

          <div className="col-md-6">
            <h4 className="subheading text-center mb-4">Hobbies & Interests</h4>
            <ul className="hobbies-list">
              <li>Reading books, primarily related to finance</li>
              <li>Exploring new tech trends and innovations</li>
              <li>Occasionally indulging in fiction books</li>
              <li>Occasionally riding my bike for fun</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #f4f4f9;  /* Light background to soften the section */
          color: #333;  /* Dark text color for better readability */
          padding: 60px 0;  /* More padding for a spacious feel */
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;  /* Darker shade for a professional look */
        }

        .lead {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #444;  /* Slightly lighter for readability */
          margin-bottom: 30px;
        }

        .core-values,
        .hobbies-list {
          list-style: none;
          padding-left: 0;
        }

        .core-values li,
        .hobbies-list li {
          font-size: 1.1rem;
          color: #555;
          margin: 10px 0;
        }

        .core-values li::before,
        .hobbies-list li::before {
          content: "•";
          margin-right: 10px;
          color: #3498db;  /* Soft blue color for bullets */
        }

        .subheading {
          font-size: 1.5rem;
          color: #2c3e50;  /* Darker shade for subheadings */
          font-weight: 600;
        }

        .row {
          margin-bottom: 40px;  /* Increased spacing between rows */
        }

        .col-md-6 {
          padding: 0 20px;
        }

        .about-img {
          width: 60%; /* Reduced width for smaller image */
          border-radius: 8px;  /* Rounded corners for a modern look */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
          margin-top: 40px;  /* Spacing above the image */
          max-height: 400px; /* Optional: limiting image height */
          object-fit: cover; /* Maintain aspect ratio */
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 2rem;
          }

          .about-img {
            margin-top: 20px;  /* Adds spacing between text and image */
            width: 100%; /* Full width for small screens */
          }
        }
      `}</style>
    </div>
  )
}

export default About
