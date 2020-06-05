import React from 'react';

import { ReactComponent as Cart } from 'assets/icons/ic-cart.svg';
import styled from 'styled-components';

const CartIconWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

const CartAmount = styled.div`
  min-width: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: -10px;
  left: -16px;
  border: 2px solid ${({ theme }) => theme.colors.purpledeep};

  span {
    color: ${({ theme }) => theme.colors.purpledeep};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

const CartIcon = () => {
  return (
    <CartIconWrapper>
      <CartAmount>
        <span>10</span>
      </CartAmount>
      <Cart />
    </CartIconWrapper>
  );
};

export default CartIcon;
