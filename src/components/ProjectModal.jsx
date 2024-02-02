// src/components/ProjectModal.js
import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;
