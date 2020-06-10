import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Flexbox from 'components/common/Flexbox';
import Button from 'components/common/Button';
import { cartSelector, selectCartTotal } from 'redux/cartStore';
import StepsIndigator from './StepsIndigator';
import OrderForm from './OrderForm';
import OrdersList from './OrdersList';
import Message from './Message';

const STEPS = {
  1: { step: 1, width: '33.3%', text: 'My order' },
  2: { step: 2, width: '66.6%', text: 'Order info' },
  3: { step: 3, width: '100%', text: 'Delivery info' },
};

const STEPS_AMOUNT = 3;

const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  a {
    text-decoration: none;
  }

  .total-price {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 24px;
  }
`;

const Text = styled.p``;

const CartSteps = () => {
  const [currentStep, setCurrentStep] = React.useState(STEPS[2].step);
  const { items } = useSelector(cartSelector);
  const totalAmount = useSelector(selectCartTotal);

  const toNextStep = () => {
    if (currentStep >= STEPS_AMOUNT) {
      return;
    }
    setCurrentStep((prev) => (prev += 1));
  };
  const toPrevStep = () => {
    if (currentStep === 0) {
      return;
    }
    setCurrentStep((prev) => (prev -= 1));
  };

  const renderSteps = () => {
    switch (currentStep) {
      case 1:
        return <OrdersList items={items} toNextStep={toNextStep} />;
      case 2:
        return <OrderForm toPrevStep={toPrevStep} toNextStep={toNextStep} />;
      case 3:
        return <Message setCurrentStep={setCurrentStep} />;
      default:
        return <OrdersList items={items} toNextStep={toNextStep} />;
    }
  };
  return (
    <CartWrapper>
      {items && items.length === 0 ? (
        <Flexbox direction="column" margin="0 auto" align="center">
          <Text>There are no items in the cart</Text>
          <Link to="/">
            <Button width="200px" text="Browse menu" />
          </Link>
        </Flexbox>
      ) : (
        <>
          <StepsIndigator steps={STEPS} currentStep={currentStep} />
          {renderSteps()}
          {currentStep !== STEPS_AMOUNT && (
            <Flexbox width="100%" justify="flex-end" margin="20px 0 0 0">
              <span className="total-price">
                Total: <span>${totalAmount.toFixed(2)}</span>
              </span>
            </Flexbox>
          )}
        </>
      )}
    </CartWrapper>
  );
};

export default CartSteps;
