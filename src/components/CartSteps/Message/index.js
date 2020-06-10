import React from 'react';
import { Link } from 'react-router-dom';

import Flexbox from 'components/common/Flexbox';
import Button from 'components/common/Button';

const Message = ({ setCurrentStep }) => {
  return (
    <Flexbox direction="column" margin="0 auto" align="center">
      <p>
        Thank you for order! Our manager will contact you about delivery
        details.
      </p>
      <Flexbox justify="space-between" width="100%">
        <Link to="/">
          <Button width="200px" text="Browse menu" />
        </Link>
        <Button
          width="200px"
          text="Back to cart"
          onClick={() => setCurrentStep(1)}
          invert
        />
      </Flexbox>
    </Flexbox>
  );
};

export default Message;
