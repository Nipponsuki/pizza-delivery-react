import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import CartIcon from 'components/CartIcon';
import Flexbox from 'components/common/Flexbox';
import OrderAmount from 'components/OrderAmount';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.purpledeep};
  height: 80px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 1px 0 rgba(162, 155, 254, 0.14),
    0 2px 1px -1px rgba(162, 155, 254, 0.12),
    0 1px 3px 0 rgba(162, 155, 254, 0.2);
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
        <Link to="/">
          <Logo />
        </Link>
        <Flexbox>
          <Link to="/cart">
            <CartIcon />
          </Link>
          <OrderAmount />
        </Flexbox>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
