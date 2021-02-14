import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const formElement = css`
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  width: 85%;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin: 1.5rem 0;
  box-shadow: ${props => props.theme.shadow.main};
  background: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.borderRadius.default};
  border: ${props => props.theme.border.default};
  font-weight: 500;
`;
const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const QueryTitle = styled.h4`
  display: block;
`;
const Field = styled.div`
  flex: 0 50%;
  margin-bottom: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex: 0 100%;
  }
`;
const FieldLabel = styled.p`
  margin: 0.5rem 0;
`;
const Input = styled.input`
  ${formElement}
  border: ${props => props.theme.border.default};
  &:hover, &:focus {
    border-color: ${props => props.theme.colors.darkGray};
  }
`;
const Select = styled.select`
  ${formElement}
  border: ${props => props.theme.border.default};
  &:hover, &:focus {
    border-color: ${props => props.theme.colors.darkGray};
  }
`;

const QuerySet = ({ title, fields }) => (
  <Wrapper>
    <QueryTitle>{title}</QueryTitle>
    <Fields>
      {fields.map(field => <Field key={field.name}>
        <FieldLabel>{field.label}</FieldLabel>
        {field.type === 'dropdown' ? <Dropdown name={field.name} options={field.options} /> : <Input name={field.name} />}
      </Field>)}
    </Fields>
  </Wrapper>
);

const Dropdown = ({ name, options }) => (
  <Select name={name}>
    {options.map(option => <option key={option} value={option}>{option}</option>)}
  </Select>
);

QuerySet.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
};

QuerySet.defaultProps = {
  title: '',
  fields: [],
};

export default QuerySet;
