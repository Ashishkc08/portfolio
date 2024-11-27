import React from 'react';
import skillsData from '../../data/SkillsData';

function SkillsCard() {
  return (
    <div className="skills-cards">
      {skillsData.map((categoryData, index) => (
        <div key={index} className="skill-category mb-5">
          <h4 className="category-title">{categoryData.category}</h4>
          <div className="row justify-content-center">
            {categoryData.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="col-md-3 mb-4 d-flex justify-content-center">
                <div className="card shadow-sm">
                  <div className="card-body text-center">
                    <div className="card-icon mb-3">{skill.icon}</div>
                    <h5 className="card-title">{skill.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Inline styles */}
      <style jsx>{`
  .skills-cards {
    padding: 30px 0;
  }

  .skill-category {
    margin-bottom: 30px;
  }

  .category-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center; /* Center the category title */
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 250px;  /* Ensuring the cards are uniform in size */
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .card-body {
    padding: 20px;
  }

  .card-icon {
    font-size: 3rem;
    color: #007bff;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: #343a40;
    margin-top: 10px;
  }

  .row {
    display: flex;
    justify-content: center;  /* Centers the cards horizontally */
    flex-wrap: wrap;
  }

  .col-md-3 {
    display: flex;
    justify-content: center;
  }

  .col-md-3 .card {
    width: 100%;
  }
`}</style>

    </div>
  );
}

export default SkillsCard;
