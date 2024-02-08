import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Cv from "./Cv";

const text =
    "Let's embark on a collaborative journey! Reach out to me today, and let's start turning ideas into reality... 💻🌐.".split(
      " "
    );

const Notification = ({ show }) => {
  return show ? (
    <div className="notification">
      <FaCheckCircle className="notif_icon"/>
      <p>Email sent successfully!</p>
    </div>
  ) : null;
};

const ContactSection = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gvcv456', 'template_hi2ma8j', form.current, {
        publicKey: 'EXblvznXF0QpyDOZ9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 10000); // Hide the notification after 10 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact_hero">
      <motion.div className="left_side">
        <motion.div className="left_side_text">
          <motion.div className="contact_label">
            <motion.div className="contact_label_text">Contact Me</motion.div>
          </motion.div>
          <motion.div className="contact_title">
            <motion.h1>
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
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="right_side">
        <form ref={form} onSubmit={sendEmail} className="form">
          <motion.div className="field">
            <motion.div className="field_inp">
              <label>Full Name :</label>
              <input type="text" name="username" required/>
            </motion.div>
          </motion.div>
          <motion.div className="field">
            <motion.div className="field_inp">
              <label>Email :</label>
              <input type="email" name="email" required/>
            </motion.div>
          </motion.div>
          <motion.div className="field">
            <motion.div className="field_inp">
              <label className="mssg ">Message :</label>
              <textarea name="message" required />
            </motion.div>
          </motion.div>
          <motion.div className="last_field">
            <motion.input
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              type="submit" value="Send" class="btn_send" />
            <Notification show={showNotification} />
          </motion.div>
          
        </form>
      </motion.div>
      <Cv />
    </div>
  );
};

export default ContactSection;
