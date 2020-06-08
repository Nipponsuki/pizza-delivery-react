import React from 'react';
import styled from 'styled-components';

import Flexbox from '../Flexbox';

const StyledInput = styled.input`
  width: 400px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  line-height: 21px;
  height: 40px;
  padding: 0px 10px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purplelight};
    outline: none;
  }
`;

const Label = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 10px 10px;
`;

const Input = ({ onChange, value, name, label, placeholder, type }) => {
  return (
    <Flexbox direction="column" margin="0 0 15px 0">
      <Label>{label}</Label>
      <StyledInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Flexbox>
  );
};

export default Input;
