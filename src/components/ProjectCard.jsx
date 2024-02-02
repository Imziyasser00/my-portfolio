// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
