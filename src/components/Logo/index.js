import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';

const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Logo = ({ onClick }) => {
  return (
    <LogoContainer>
      <LogoSvg onClick={onClick} />
    </LogoContainer>
  );
};

export default Logo;
