import React from 'react'
import './WorkSection.css'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from './ProjectsData'
import Cv from './Cv'

const WorkSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 ,} },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className='work-hero'>
      <motion.div className='work_container'
                  variants={containerVariants}
                  initial='hidden'
                  animate='visible'
      >
      {projects.map((project) => (
        <motion.div  key={project.id} variants={cardVariants} transition={{duration:0.7}}>
          <ProjectCard
            id={project.id}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        </motion.div>
         
        ))}
      </motion.div>

      <Cv />
    </motion.div>
    
  )
}

export default WorkSection
