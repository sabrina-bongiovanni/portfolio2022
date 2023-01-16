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

export default Homepage;
