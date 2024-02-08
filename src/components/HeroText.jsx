import React from "react";
import "./HeroText.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className=".hero_content">
      <motion.div
        className="hero-text"
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.2, duration: 2 }}
      >
        Hi,
        <br />
        I'm <span className="y">Y</span>asser,
        <br />
        web developer
        <br />
      </motion.div>
      <motion.div
        className="gray-text"
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.6, duration: 2 }}
      >
        Full Stack Developer / UI UX Designer
      </motion.div>
      <Link to="/contact">
        <motion.div
          class="btn"
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.8, duration: 2 }}
        >
          Contact me!
        </motion.div>
      </Link>
    </div>
  );
};

export default HeroText;
