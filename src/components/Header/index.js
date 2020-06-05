import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import CartIcon from 'components/CartIcon';
import Flexbox from 'components/common/Flexbox';
import OrderAmount from 'components/OrderAmount';

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.purpledeep};
  height: 80px;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 auto;
  height: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
        <Flexbox>
          <CartIcon />
          <OrderAmount />
        </Flexbox>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
