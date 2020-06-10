import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCartTotal } from 'redux/cartStore';
import { DELIVERY_COST } from 'components/CartSteps';

const Amount = styled.span`
  font-size: 20px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`;

const OrderAmount = () => {
  const totalAmount = useSelector(selectCartTotal);
  return (
    <>
      {totalAmount > 0 && (
        <Amount>{(totalAmount + DELIVERY_COST).toFixed(2)} $</Amount>
      )}
    </>
  );
};

export default OrderAmount;
