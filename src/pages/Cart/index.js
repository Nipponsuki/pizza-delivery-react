import React from 'react';
import styled from 'styled-components';

import CartSteps from 'components/CartSteps';
import Title from 'components/common/Title';

const PageWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Cart = () => {
  return (
    <>
      <Title title="Delpizza | Cart" />
      <PageWrapper>
        <CartSteps />
      </PageWrapper>
    </>
  );
};

export default Cart;
