import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;

  .remove-order-icon {
    cursor: pointer;
    background: red;
    padding: 5px;
    background: ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    path {
      fill: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease;
    }
  }
`;

const OrderImage = styled.div`
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const OrderName = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 16px;
  line-height: 20px;
`;

const OrderPrice = styled.span`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 25px;
  color: #8f8e8e;
`;

const OrderAmount = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.purplelight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const OrderAmountAction = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.purplelight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Order = ({ item }) => {
  return (
    <OrderContainer>
      <OrderImage>
        <img src={item.image_url} alt={item.name} />
      </OrderImage>
      <OrderName>{item.name}</OrderName>
      <OrderPrice>{item.price} $</OrderPrice>
      <OrderAmount>
        <OrderAmountAction>+</OrderAmountAction>
        <span>1</span>
        <OrderAmountAction>-</OrderAmountAction>
      </OrderAmount>
      <CloseIcon className="remove-order-icon" />
    </OrderContainer>
  );
};

export default Order;
