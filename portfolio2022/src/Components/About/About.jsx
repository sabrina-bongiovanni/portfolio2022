import React from 'react';
import pic from '../media/picture.jpg?width="1000';
import { motion } from 'framer-motion';

const About = () => {
  const divVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="about-container"
      initial={divVariant.offscreen}
      whileInView={divVariant.onscreen}
      viewport={{ once: false, amount: 0.9 }}
    >
      <div className="about-me-content">
        <div className="text">Lorem ipsum</div>
        <div className="image">
          <img src={pic} alt="dev" width="500" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
