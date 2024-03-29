import React from 'react';
import useMediaQuery from 'react-responsive';

import { defineMessages, useIntl } from 'react-intl';
import { motion } from 'framer-motion';

import './Homepage.scss';

// https://www.youtube.com/watch?v=m1Cm1ivOjzU

const Homepage = () => {
  const intl = useIntl();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="homepage-container" id="homepage">
      <motion.div
        className="title-container"
        onViewportLeave={(entry) =>
          console.log('deactivate previous nav item and activate next')
        }
        whileInView={{
          opacity: 1,
          transition: { type: 'spring', bounce: 0.4, duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.8 }}
        initial={{ opacity: 0 }}
      >
        <motion.h1
          className="title"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
        >
          <motion.div
            className="hello"
            initial={{ opacity: 0, y: '-30%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.5 }}
          >
            {intl.formatMessage(messages.hello)}
          </motion.div>
          <motion.div
            className="name"
            initial={{ opacity: 0, y: '-30%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Sabrina
          </motion.div>
          <motion.div
            className="job"
            initial={{ opacity: 0, y: '-30%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            React Front-End Developer
          </motion.div>
        </motion.h1>
      </motion.div>
    </div>
  );
};

const messages = defineMessages({
  hello: {
    id: 'hello',
    defaultMessage: 'Ciao, sono',
  },
});

export default Homepage;
