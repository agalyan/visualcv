import React from 'react';
import Helmet from 'react-helmet';
import { About } from 'components';
import { Layout, Container } from 'layouts';

const AboutPage = () => (
  <Layout>
    <Helmet title={'About Page'} />
    <Container>
        <About />
      </Container>
  </Layout>
);

export default AboutPage;
