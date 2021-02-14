import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getQuestions, submitAnswers } from '../../../actions/questionActions';
import Button from '../RegularBtn';
import QuerySet from './QuerySet';

const Form = styled.form``;
const SubmitArea = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then(data => setQuestions(data && data.questions ? data.questions : []));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    submitAnswers(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {questions.map(query => <QuerySet key={query.title} {...query} />)}
      <SubmitArea>
        <Button title='Save'></Button>
      </SubmitArea>
    </Form>
  )
};

export default HomePage;
