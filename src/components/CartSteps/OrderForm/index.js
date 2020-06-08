import React from 'react';

import Flexbox from 'components/common/Flexbox';
import Input from 'components/common/Input';

const OrderForm = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  return (
    <Flexbox direction="column">
      <Input
        value={name}
        label="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter full name please"
        type="text"
      />
      <Input
        value={phone}
        label="Phone number"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+7-(___)-___-__-__"
        type="tel"
      />
      <Input
        value={name}
        label="address"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter address please"
        type="text"
      />
      <Input
        value={name}
        label="email"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter email please"
        type="email"
      />
    </Flexbox>
  );
};

export default OrderForm;
