import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

const Homepage = () => {
  const intl = useIntl();
  return (
    <div className="homepage-container">
      {intl.formatMessage(messages.homepageTitle)}
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
