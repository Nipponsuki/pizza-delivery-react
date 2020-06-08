import React from 'react';
import styled from 'styled-components';
import CartSteps from 'components/CartSteps/inidex';

const PageWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Cart = () => {
  return (
    <PageWrapper>
      <CartSteps />
    </PageWrapper>
  );
};

export default Cart;
