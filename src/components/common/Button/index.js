import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${(props) =>
    props.invert ? props.theme.colors.purpledeep : props.theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  border-radius: 5px;
  text-transform: uppercase;
  background: ${(props) =>
    props.invert ? props.theme.colors.white : props.theme.colors.purpledeep};
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.purpledeep};
  cursor: pointer;
  margin: ${(props) => props.margin};

  &:hover {
    background: ${(props) =>
      props.invert ? props.theme.colors.purpledeep : props.theme.colors.white};
    color: ${(props) =>
      props.invert ? props.theme.colors.white : props.theme.colors.purpledeep};
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ text, onClick, width, margin, invert, type }) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      margin={margin}
      invert={invert}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
