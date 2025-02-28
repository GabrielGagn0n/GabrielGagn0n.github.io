import React from "react";
import "../components-css/Experiences.css";

const ExperienceCard = ({ title, location, children, tags}) => {
  return (
    <div className="experience-card">
      <h3 className="experience-title">{title}</h3>
      <h4 className="experience-location">{location}</h4>
      <div className="experience-description">{children}</div>
      
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
