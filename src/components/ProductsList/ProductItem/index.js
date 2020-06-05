import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/Button';

const ProductItemContainer = styled.div`
  width: 250px;
  border: 2px solid ${({ theme }) => theme.colors.purplelight};
  height: 350px;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
  button {
    margin: auto auto 10px auto;
  }
`;

const ProductImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.purpledeep};
  text-transform: uppercase;
  font-weight: normal;
  margin: 10px 0 0 10px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.black};
  margin: 0px 0 0 10px;
`;

const ProductIngredients = styled.p`
  font-size: 14px;
  line-height: 16px;
  margin: 0;
  color: #3c3c3b;
  margin: 10px 10px 0 10px;
`;

const ProductItem = ({ item }) => {
  return (
    <ProductItemContainer>
      <ProductImage>
        <img src={item.image_url} alt={item.name} />
      </ProductImage>
      <ProductName>{item.name}</ProductName>
      <ProductPrice>{item.price} $</ProductPrice>
      <ProductIngredients>{item.ingredients}</ProductIngredients>
      <Button text="Add to cart" />
    </ProductItemContainer>
  );
};

export default ProductItem;
