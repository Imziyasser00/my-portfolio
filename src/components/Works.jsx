// src/components/Works.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Works.css';
import projects from './ProjectsData';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="works-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} onClick={openProjectModal} />
      ))}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
    </div>
  );
};

export default Works;
