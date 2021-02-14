import React from 'react';
import styled from '@emotion/styled';
import siteInfo from '../../config/site.js'
import instaImg from '../../static/images/instagram.svg';
import fbImg from '../../static/images/facebook.svg';

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fontFamily.footer};
  padding: 1rem;
`;
const Socials = styled.div`
  display: flex;
  text-align: left;
  img {
    margin-top: 10px;
    margin-right: 10px;
    height: 22px;
    width: 22px;
    cursor: pointer;
  }
`;
const Copyright = styled.p`
  text-align: center;
  margin-bottom: 0;
  padding: 1rem 0;
`;
const Footer = () => (
  <Wrapper>
    <Copyright>{siteInfo.copyrightText(new Date().getFullYear())}</Copyright>
    <Socials>
      <img src={fbImg} alt="Facebook" />
      <img src={instaImg} alt="Instagram" />
    </Socials>
  </Wrapper>
);

export default Footer;
