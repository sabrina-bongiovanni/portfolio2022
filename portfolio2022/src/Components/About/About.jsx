import React, { useRef } from 'react';
import pic from '../media/picture.jpg?width="1000';
import { motion, useScroll } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
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
      ref={ref}
      id="about"
      className="about-container"
      initial={divVariant.offscreen}
      whileInView={divVariant.onscreen}
      viewport={{ once: false, amount: 1, margin: '0px 0px -100px 0px' }}
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
