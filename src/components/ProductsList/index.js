import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ProductItem from './ProductItem';

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

const ProductListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`;

const ProductList = () => {
  const { data, loading } = useQuery(query);
  return (
    <ProductListContainer>
      {loading && <h2>Loading</h2>}
      {data && data.items.map((el) => <ProductItem item={el} key={el.id} />)}
    </ProductListContainer>
  );
};

export default ProductList;
