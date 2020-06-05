import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  border-radius: 5px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.purpledeep};
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.purpledeep};
  cursor: pointer;
  margin: ${(props) => props.margin};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.purpledeep};
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ text, onClick, width, margin }) => {
  return (
    <StyledButton onClick={onClick} width={width} margin={margin}>
      {text}
    </StyledButton>
  );
};

export default Button;
