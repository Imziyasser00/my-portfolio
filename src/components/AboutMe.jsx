import React from "react";
import "./AboutMe.css";
import { motion, useAnimation } from "framer-motion";
const AboutMe = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Adjust the scroll position where you want the fade-out effect to start
    const scrollY = window.scrollY;

    // Adjust the threshold based on your preference
    const fadeOutThreshold = 200;

    if (scrollY > fadeOutThreshold) {
      controls.start({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 });
    }
  };

  // Add event listener for scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "Hey! 👋 I'm Yassir, a Computer Science student at Bordeaux University. Passionate about web development and exploring cloud tech, I code in Java, C++, and more, with an eye on mastering the MERN Stack and TypeScript. 💻🌐.".split(
      " "
    );

  return (
    <div className="skills-hero">
      <span className="code">&lt;html&gt;</span>
      <motion.div
        className="sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="details">
          <motion.h1>About Me </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <motion.p className="skills-paragraph">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </motion.p>
            
          </motion.div>
        </div>
        <div className="skills">
              <div className="skill">
                <p>Front-End</p>
                
              </div>
             
              
              
              <div className="skill">
                <p>PHP</p>
                <div className="bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "86%" }}
                    transition={{ delay: 2, duration: 1 }}
                    className="bar-progress-php"
                  ></motion.div>
                </div>
              </div>
              <div className="skill">
                <p>C</p>
                <div className="bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "69%" }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="bar-progress-c"
                  ></motion.div>
                </div>
              </div>
              <div className="skill">
                <p>C++</p>
                <div className="bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "81%" }}
                    transition={{ delay: 2.4, duration: 1 }}
                    className="bar-progress-cpp"
                  ></motion.div>
                </div>
              </div>
            </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
