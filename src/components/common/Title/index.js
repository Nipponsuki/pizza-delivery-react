import React from 'react';
import { Helmet } from 'react-helmet';

const Title = ({ title }) => {
  const defaultTitle = 'Delpizza | Home';
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

export default Title;
