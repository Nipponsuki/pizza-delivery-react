import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Flexbox from 'components/common/Flexbox';
import Button from 'components/common/Button';
import StepsIndigator from './StepsIndigator';
import Order from './Order';
import OrderForm from './OrderForm';

const query = gql`
  query allProducts {
    items {
      desc
      id
      image_url
      ingredients
      name
      price
    }
  }
`;

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
`;

const CartSteps = () => {
  const [currentStep, setCurrentStep] = React.useState(STEPS[1].step);
  const { data } = useQuery(query);

  const toNextStep = () => {
    if (currentStep >= STEPS_AMOUNT) {
      return;
    }
    setCurrentStep((prev) => (prev += 1));
  };

  const renderSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <Flexbox width="100%" direction="column">
            {data && data.items.map((el) => <Order item={el} key={el.id} />)}
          </Flexbox>
        );
      case 2:
        return <OrderForm />;
      case 3:
        return (
          <h1>
            Thank you for order! Our manager will contact you about delivery
            details.
          </h1>
        );
      default:
        return <h1>First step</h1>;
    }
  };
  return (
    <CartWrapper>
      <StepsIndigator steps={STEPS} currentStep={currentStep} />
      {renderSteps()}
      <Flexbox width="100%" justify="space-between" margin="20px 0 0 0">
        {currentStep !== STEPS_AMOUNT && (
          <>
            <Button text="Next" width="200px" onClick={() => toNextStep()} />
            <span>Total: price</span>
          </>
        )}
      </Flexbox>
    </CartWrapper>
  );
};

export default CartSteps;
