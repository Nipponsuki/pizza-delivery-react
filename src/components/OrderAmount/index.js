import React from 'react';
import styled from 'styled-components';

const Amount = styled.span`
  font-size: 20px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`;

const OrderAmount = () => {
  return <Amount>849 $</Amount>;
};

export default OrderAmount;
