import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: ${props => props.theme.button.bgColor};
  box-sizing: border-box;
  border-radius: ${props => props.theme.button.borderRadius};
  border: ${props => props.theme.button.border};
  color: ${props => props.theme.button.textColor};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  min-width: 130px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.button.hover.bgColor};
    color: ${props => props.theme.button.hover.textColor};
    border: ${props => props.theme.button.hover.border};
    box-shadow: ${props => props.theme.button.hover.shadow};
  }
  &:focus{
    outline: 0;
  }
  p {
    margin: 0
  }
`;

const Title = styled.span`
`;

const RegularBtn = ({ title, children: icon }) => (
  <Button>
    {icon}
    <Title>{title}</Title>
  </Button>
);

export default RegularBtn;

RegularBtn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};

RegularBtn.defaultProps = {
  title: '',
  children: false,
};
