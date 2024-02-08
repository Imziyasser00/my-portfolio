import React from "react";
import "./AboutMe.css";
import { motion, useAnimation } from "framer-motion";
import Cv from "./Cv";
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
    <div className="bt-hero">
      <Cv />
      <span className="code">&lt;html&gt;</span>
      <motion.div
        className="sections-abt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="details-bt">
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
        <div className="AboutDesc">
          <motion.h2
            className="skill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            Hi there 👋
          </motion.h2>
          <motion.h1
            className="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.6 }}
          >
            I'm Yasser 💻
            </motion.h1>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.7, duration: 1 }}
                className="title_underline" 
              ></motion.div>
            </div>
            <motion.h2
              className="abt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9, duration: 0.6 }}
            >
              👨‍🦱•💻 About Me
              <div className="abt-details">
                <ul>
                  <li><p> - 🤔   Exploring new technologies and developing software solutions and quick hacks.</p></li>
                  <li><p> - 🎓   Studying Computer Science and Engineering at Bordeaux University.</p></li>
                  <li><p> - 🌱   Learning about Cloud Tech, Systems Design.</p></li>
                  <li><p> - ✍️   Pursuing Web Development as hobbies/side hustles.</p></li>
                </ul>
              </div>
            </motion.h2>
            <motion.h2
              className="abt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.6 }}
            >
              🛠 • Tech Stack

              <div className="abt-details">
                <ul>
                  <li><p> - 💻   Java | C++ | C | MySQL</p></li>
                  <li><p> - 🌐   HTML | CSS | JavaScript | Bootstrap | ReactJS | PHP</p></li>
                </ul>
              </div>
            </motion.h2>

            <motion.h2
              className="abt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay:3.5, duration: 0.6 }}
            >
              🛠 • To Learn

              <div className="abt-details">
                <ul>
                  <li><p>🔧   MERN Stack | Type script</p></li>
                </ul>
              </div>
            </motion.h2>


        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
