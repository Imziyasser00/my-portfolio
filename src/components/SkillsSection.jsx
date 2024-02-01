import React from 'react'
import "./skills.css"
import { motion } from "framer-motion"

const SkillsSection = () => {
  return (
    <div className='skills-hero'>
      
    <span className='code'>&lt;html&gt;</span>
    <motion.div className="sections"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.4,duration:0.5}}>
      <div className="details">
        <h1>Skills &#38; <br></br>
Experience</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <p>Front-End</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'90%'}}
            transition={{delay:1,duration:1}}
             className="bar-progress-front"></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>Back-End</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'76%'}}
            transition={{delay:1.2,duration:1}}
            className="bar-progress-back"></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>ReactJs</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'65%'}}
            transition={{delay:1.4,duration:1}}
            className="bar-progress-react"></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>UI Design</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'84%'}}
            transition={{delay:1.6,duration:1}}
            className="bar-progress-ui"></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>Java</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'75%'}}
            transition={{delay:1.8,duration:1}}
            className="bar-progress-java" ></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>PHP</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'86%'}}
            transition={{delay:2,duration:1}}
            className="bar-progress-php" ></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>C</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'69%'}}
            transition={{delay:2.2,duration:1}}
            className="bar-progress-c" ></motion.div>
          </div>
        </div>
        <div className="skill">
          <p>C++</p>
          <div className="bar">
            <motion.div
            initial={{width:0}}
            animate={{width:'81%'}}
            transition={{delay:2.4,duration:1}}
            className="bar-progress-cpp" ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>

    </div>
  )
}

export default SkillsSection