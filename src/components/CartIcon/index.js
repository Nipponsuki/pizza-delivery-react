import React from 'react';

import { ReactComponent as Cart } from 'assets/icons/ic-cart.svg';
import styled from 'styled-components';
import { selectCartItemsCount } from 'redux/cartStore';
import { useSelector } from 'react-redux';

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
  const count = useSelector(selectCartItemsCount);
  return (
    <CartIconWrapper>
      {count > 0 && (
        <CartAmount>
          <span>{count}</span>
        </CartAmount>
      )}
      <Cart />
    </CartIconWrapper>
  );
};

export default CartIcon;
