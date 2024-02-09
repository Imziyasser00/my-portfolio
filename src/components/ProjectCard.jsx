import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Cv from "./Cv";

const ProjectCard = ({ id,title, image, githubLink, liveDemoLink }) => {
  
  
    return (
    <motion.article className="project_card" 
    >
      <motion.div className="project_image">
        <motion.img src={image} alt={title} />
      </motion.div>
      <motion.h3 className="project_title">{title}</motion.h3>
      <motion.div className="card_btns">
        <motion.div className="git_live">
          <motion.a href={githubLink} className="btn_prjct"
                    whileHover={{ backgroundColor: "#FD2155", color: "white",letterSpacing: "3px",}}
                    transition={{duration : 0.4}}
                    target="blank"
          >
            Github
          </motion.a>
          <motion.a href={liveDemoLink} className="btn_prjct live"
                    whileHover={{ backgroundColor: "#05FDD8", color: "rgb(43, 43, 43)",letterSpacing: "0.5px",}}
                    transition={{duration : 0.4}}
                    target="blank"
          >
            LiveDemo
          </motion.a>
        </motion.div>
        
        <Link to={`/project/${id}`} >
          <IoMdArrowDroprightCircle className="icon_more" />
        </Link>
      </motion.div>
      <Cv />
    </motion.article>
  );
};

export default ProjectCard;
