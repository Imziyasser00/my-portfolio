import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate  } from 'react-router-dom';
import './ProjectDetails.css';
import projects from './ProjectsData';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Cv from './Cv';


const ProjectDetails = () => {
  const { projectId } = useParams(); 
  const navigate = useNavigate();
  console.log('projectId:', projectId);
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const selectedProject = projects.find(project => project.id.toString() === projectId);

  if (!selectedProject) {
    console.log('Project not found');
    return <div>Project not found</div>;
  }

  return (
    <motion.div className='prjct_dtls_container'>
      <motion.div className='go_back'
                  initial={{y:-100}}
                  animate={{y:0}}
                  transition={{duration:0.5}}
                  whileHover={{scale: 1.1}}
      >
        <IoMdArrowRoundBack onClick={() => navigate(-1)}/>
      </motion.div>
      <motion.div className='content_prjct'>
        <motion.div className='prjct_title'
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants}
                    transition={{ duration: 0.5 }}
        >
          <h3>{selectedProject.title}</h3>
        </motion.div>
        <motion.img src={selectedProject.image} alt={selectedProject.title} className='project_img'
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants}
                    transition={{ duration: 0.6, delay: 0.3 }}          
        />
        <motion.div className='tech_desc'>
          <motion.div className='tech_desc_content'>
            <motion.div className='project_description'
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 0.6, delay: 0.6 }}
            >
              <strong>Description :</strong>
              {selectedProject.description}
            </motion.div>
            <motion.div className='project_technologies'
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 0.6, delay: 0.9 }}
            >
              <strong>Technologies :</strong>
              <motion.div className='technology-list'
                          initial="hidden"
                          animate="visible"
                          variants={animationVariants}
                          transition={{ duration: 0.6, delay: 1.2 }}
              >
                {selectedProject.technologies.map((tech, index) => (
                  <motion.div key={index} className='technology-item'
                              whileHover={{backgroundColor:"#05FDD8", color:"black"}} 
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
        </motion.div>
        <motion.div className='key_btns'>
          <motion.div className='key_btns_content'>
              <motion.div className='key_features'
                          initial="hidden"
                          animate="visible"
                          variants={animationVariants}
                          transition={{ duration: 0.6, delay: 0.3 }}
              >
                <strong>Key Features : </strong>
                <motion.ul className='key_features_list'>
                  {selectedProject.KeyFeatures.map((key,index) => (
                    <motion.li key={index} className='key-item'>
                      <FaCheckCircle className='check_icon'/>{key}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div className="card_btns">
              <motion.div className="git_live_icons">
                <motion.a href={selectedProject.githubLink} className="btn_prjct gitlive"
                          whileHover={{ backgroundColor: "#FD2155", color: "white",letterSpacing: "3px",}}
                          transition={{duration : 0.4}}
                          target='blank'
                >
                  Github
                </motion.a>
                <motion.a href={selectedProject.liveDemoLink} className="btn_prjct live gitlive"
                          whileHover={{ backgroundColor: "#05FDD8", color: "rgb(43, 43, 43)",letterSpacing: "0.5px",}}
                          transition={{duration : 0.4}}
                          target='blank'
                >
                  LiveDemo
                </motion.a>
              </motion.div>
              
            </motion.div>
          </motion.div>
          
          
        </motion.div>
        
        
      </motion.div>
      <Cv />
      
    </motion.div>
  );
}

export default ProjectDetails;
