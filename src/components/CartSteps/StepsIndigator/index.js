import React from 'react';
import styled from 'styled-components';

import Flexbox from 'components/common/Flexbox';

const Step = styled.div`
  width: 28px;
  height: 28px;
  border: ${(props) => {
    if (props.active) return '1px solid #000000';
    if (props.complete) return '1px solid #69A82F';
    return '1px solid #c7c6c6';
  }};

  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  div {
    width: 28px;
    height: 28px;
    background: ${(props) => {
      if (props.active) return '#000000';
      if (props.complete) return '#69A82F';
      return '#c7c6c6';
    }};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const StepText = styled.span`
  color: ${(props) => {
    if (props.active) return '#000000';
    if (props.complete) return '#69A82F';
    return '#c7c6c6';
  }};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  line-height: 18px;
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StepsLine = styled.div`
  width: 100%;
  height: 2px;
  background: #c7c6c6;
  margin-top: 20px;
  position: relative;
`;

const StepsInnerLine = styled.div`
  background: ${({ theme }) => theme.colors.black};
  position: absolute;
  width: ${(props) => props.width};
  height: 100%;
`;

const StepsWrapper = styled.div`
  width: 480px;
  margin: 20px auto 20px auto;
`;

const StepsIndigator = ({ steps, currentStep }) => {
  return (
    <StepsWrapper>
      <StepsContainer>
        {Object.keys(steps).map((step) => (
          <Flexbox
            direction="column"
            align="center"
            justify="center"
            key={steps[step].step}
          >
            <StepText
              active={currentStep === Number(step)}
              complete={currentStep > Number(step) - 1}
            >
              {steps[step].text}
            </StepText>
            <Step
              active={currentStep === Number(step)}
              complete={currentStep > Number(step) - 1}
            >
              <div>
                <span>{steps[step].step}</span>
              </div>
            </Step>
          </Flexbox>
        ))}
      </StepsContainer>
      <StepsLine>
        <StepsInnerLine width={steps[currentStep].width} />
      </StepsLine>
    </StepsWrapper>
  );
};

export default StepsIndigator;
