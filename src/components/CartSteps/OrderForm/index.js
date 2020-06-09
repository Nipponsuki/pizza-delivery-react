import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/icons/arrow-left.svg';

import Flexbox from 'components/common/Flexbox';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.purpledeep};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 50%;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  padding-top: 4px;
  img {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.purpledeep};
    color: ${({ theme }) => theme.colors.purpledeep};
    background: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purpledeep};
    color: ${({ theme }) => theme.colors.purpledeep};
    background: ${({ theme }) => theme.colors.white};
  }
`;

const OrderForm = ({ toPrevStep, toNextStep }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const makeOrder = () => {
    toNextStep();
  };
  return (
    <>
      <Flexbox direction="column" margin="0 auto">
        <BackButton onClick={toPrevStep}>
          <Arrow />
        </BackButton>
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
      <Button
        width="200px"
        text="Checkout"
        onClick={makeOrder}
        margin="20px 0 0 0"
      />
    </>
  );
};

export default OrderForm;
