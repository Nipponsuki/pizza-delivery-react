import React from 'react';

import Title from 'components/common/Title';
import ContentWrapper from 'components/common/ContentWrapper';
import ProductList from 'components/ProductsList';

const Home = () => {
  return (
    <>
      <Title />
      <ContentWrapper>
        <ProductList />
      </ContentWrapper>
    </>
  );
};

export default Home;
