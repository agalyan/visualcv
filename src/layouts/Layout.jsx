import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { Footer, Header } from 'layouts';
import global from '../styles/global';
import theme from '../../config/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global styles={global} />
      <Header />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
