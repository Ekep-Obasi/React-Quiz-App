import React from 'react';
import styled from '@emotion/styled';
import PageTemplate from '../components/PageTemplate';
import { Form } from '../components';

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin: 1.5px auto;
    color: ${(props) =>
      props.theme.bg.primary === '#0d1117'
        ? props.theme.colors.white
        : props.theme.colors.dark};
    font-size: 2rem;
    font-weight: 500;
  }

  height: 90vh;
  width: 100%;
  padding: 1rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function SetupQuiz() {
  return (
    <PageTemplate>
      <Wrapper>
        <h2>Setup Quiz Structure</h2>
        <Form />
      </Wrapper>
    </PageTemplate>
  );
}

export default SetupQuiz;
