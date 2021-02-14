import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logo from '../../static/logo/logo.svg';

const HeaderWrapper = styled.header`
  height: 70px;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  border-bottom: ${props => props.theme.border.default};
  a {
    line-height: 2.5rem;
    color: ${props => props.theme.colors.blue};
    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <Logo src={logo} alt="VisualCV" />
    </Link>
    <Link to="/about">About</Link>
  </HeaderWrapper>
);

export default Header;
