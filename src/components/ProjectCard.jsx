import React from 'react'
import { motion } from 'framer-motion'
import './projectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <motion.div className='card'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      key={props.id}
    >
         <Link key={props.message.id} to={`/project-details?project=${props.message.id}`}>
        <motion.div className='card-content'
        >
           
                <motion.img src={props.message.image} alt={props.message.name} width={380}/>
            
            <motion.div className='prjctTitle'
            >
                <motion.h2
                        initial={{opacity: 0}}
                        animate={{opacity: 100}}
                        transition={{delay:3}}
                 >
                    {props.message.title}
                </motion.h2>
            </motion.div>
            
        </motion.div>
        </Link>
    </motion.div>
  )
}

export default ProjectCard
