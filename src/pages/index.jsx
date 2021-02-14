import React from 'react';
import Helmet from 'react-helmet';
import { Home } from 'components';
import { Layout, Container } from 'layouts';

const Index = () => {
  return (
    <Layout>
      <Helmet title={'VisualCV Questionnaire'} />
      <Container>
        <Home />
      </Container>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  //data:
};
