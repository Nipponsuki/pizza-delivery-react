import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

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

const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin: 0;
  position: absolute;
  bottom: -5px;
  font-size: 12px;
`;
const OrderForm = ({ toPrevStep, toNextStep }) => {
  const { handleSubmit, register, errors } = useForm();

  const makeOrder = () => {
    toNextStep();
  };
  return (
    <>
      <form onSubmit={handleSubmit(makeOrder)} style={{ width: '100%' }}>
        <Flexbox direction="column" margin="0 auto">
          <BackButton onClick={toPrevStep}>
            <Arrow />
          </BackButton>
          <Flexbox
            direction="column"
            margin="0 auto"
            align="center"
            width="100%"
          >
            <Flexbox direction="column" position="relative" margin="0 0 10px 0">
              <Input
                label="name"
                name="name"
                placeholder="Enter full name please"
                type="text"
                register={register({
                  required: true,
                  message: 'Name is required',
                })}
              />
              {errors.name && <Error>Name is required</Error>}
            </Flexbox>
            <Flexbox direction="column" position="relative" margin="0 0 10px 0">
              <Input
                label="Phone number"
                placeholder="Enter phone number please (89819917188)"
                type="number"
                register={register({
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
                name="phone"
              />
              {errors.phone && (
                <Error>
                  Phone is required and should be in form 89819917188
                </Error>
              )}
            </Flexbox>
            <Flexbox direction="column" position="relative" margin="0 0 10px 0">
              <Input
                label="address"
                placeholder="Enter address please"
                type="text"
                register={register({ required: true })}
                name="address"
              />
              {errors.address && <Error>Address is required</Error>}
            </Flexbox>
            <Flexbox direction="column" position="relative" margin="0 0 10px 0">
              <Input
                label="email"
                placeholder="Enter email please"
                type="email"
                register={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
                name="email"
              />
              {errors.email && (
                <Error>Email is required and should be valid</Error>
              )}
            </Flexbox>
          </Flexbox>
          <Button
            width="200px"
            text="Checkout"
            margin="20px 0 0 0"
            type="submit"
          />
        </Flexbox>
      </form>
    </>
  );
};

export default OrderForm;
