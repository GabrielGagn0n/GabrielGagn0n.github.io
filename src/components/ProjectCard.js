import React from "react";
import "../components-css/ProjectCard.css";

const ProjectCard = ({ image, title, description, link1, link2 }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={link1} target="_blank" rel="noopener noreferrer" className="project-link">View</a>
        {link2 && (
          <a href={link2} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
