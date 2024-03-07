import React from 'react';
import { useMediaQuery } from 'react-responsive';

import pic from '../media/picture.jpg?width="1000';
import { motion, useScroll } from 'framer-motion';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  console.log(isMobile);

  const divVariant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  };

  const animationViewportSettings = isMobile
    ? {
        once: false,
        amount: 1,
        margin: '0px 0px -300px 0px',
      }
    : { once: false, amount: 1, margin: '0px 0px -120px 0px' };

  return (
    <motion.div
      id="about"
      className="about-container"
      initial={divVariant.offscreen}
      whileInView={divVariant.onscreen}
      viewport={animationViewportSettings}
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
