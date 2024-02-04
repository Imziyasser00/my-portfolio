import React from 'react'
import { motion } from 'framer-motion'
import './Work.css'
import ProjectCard from './ProjectCard'
import projects from './ProjectsData'
const WorkSection = () => {
  return (
    <motion.div className='work-hero'>
      <motion.div className='cards'>
        {
          projects.map((project)=>(
          <ProjectCard message={project} key={project.id}/>
        ))

        }
        
      </motion.div>
    </motion.div>
  )
}

export default WorkSection
