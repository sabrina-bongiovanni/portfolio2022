import React from 'react';

import { defineMessages, useIntl } from 'react-intl';
import Fade from 'react-reveal/Fade';

import './Homepage.scss';

const Homepage = () => {
  const intl = useIntl();
  return (
    <div className="homepage-container" id="homepage">
      <div className="title-container">
        <Fade left>
          <h1 className="title">
            {intl.formatMessage(messages.homepageTitle)}
          </h1>
        </Fade>
      </div>
    </div>
  );
};

const messages = defineMessages({
  homepageTitle: {
    id: 'homepageTitle',
    defaultMessage: 'Ciao, sono una Front-End Developer',
  },
});

export default Homepage;
