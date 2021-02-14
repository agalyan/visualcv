import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin: 1.5rem 0;
  box-shadow: ${props => props.theme.shadow.main};
  background: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.borderRadius.default};
  border: ${props => props.theme.border.default};
  height: 75vh;
`;

const AboutPage = () => (
  <Wrapper>
    <h4>{`Gather user information for VisualCV`}</h4>
  </Wrapper>
);

export default AboutPage;
