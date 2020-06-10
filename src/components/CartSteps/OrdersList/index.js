import React from 'react';

import Button from 'components/common/Button';
import Flexbox from 'components/common/Flexbox';
import Order from '../Order';

const OrdersList = ({ toNextStep, items }) => {
  return (
    <Flexbox width="100%" direction="column">
      {items && items.map((el) => <Order item={el} key={el.id} />)}
      <Button
        width="200px"
        text="Next"
        onClick={() => toNextStep()}
        margin="20px 0 0 0"
      />
    </Flexbox>
  );
};

export default OrdersList;
