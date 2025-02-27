import React from "react";
import "../components-css/Experiences.css";

const ExperienceCard = ({ title, description}) => {
  return (
    <div className="experience-card">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
