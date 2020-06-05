import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import Overlay from 'components/common/Overlay';
import Flexbox from 'components/common/Flexbox';
import Button from 'components/common/Button';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import { useOutsideClick } from 'hooks/useOutsideClick';

const ProductItemImage = styled.div`
  img {
    width: 315px;
    height: 270px;
    border-radius: 5px;
  }
`;

const ProductItemContainer = styled.div`
  width: 650px;
  height: 375px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: unset;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.purpledeep};
    }
    position: absolute;
    right: 15px;
    top: 15px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

const ProductItemDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #3c3c3b;
  margin: 0;
`;

const ProductName = styled.h3`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.114286px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #3c3c3b;
  font-weight: normal;
  margin: 10px 0 0px 0;
`;

const ItemIng = styled.p`
  margin: 10px 0 10px 10px;
  span {
    font-size: 24px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: #3c3c3b;
    font-weight: normal;
    margin: 0 10px 0 0;
    display: inline-block;
  }
`;

const ProductItemModal = ({ item, closeModal }) => {
  useLockBodyScroll();
  const ref = React.useRef();
  useOutsideClick(ref, () => {
    closeModal();
  });
  return (
    <Overlay>
      <ProductItemContainer ref={ref}>
        <CloseIcon onClick={() => closeModal()} />
        <Flexbox>
          <ProductItemImage>
            <img src={item.image_url} alt={item.name} />
          </ProductItemImage>
          <Flexbox direction="column" padding="20px">
            <ProductName>{item.name}</ProductName>
            <Button text="Add to cart" width="140px" margin="10px 0 10px 0" />
            <ProductItemDesc>{item.desc}</ProductItemDesc>
          </Flexbox>
        </Flexbox>
        <ItemIng>
          <span>Ingredients:</span>
          {item.ingredients}
        </ItemIng>
      </ProductItemContainer>
    </Overlay>
  );
};

export default ProductItemModal;
