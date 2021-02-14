import { css } from '@emotion/core';
import theme from '../../config/theme';

const global = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 30;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: ${theme.colors.link};
    transition: color 0.5s;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: ${theme.colors.linkHover};
  }
`;

export default global;
