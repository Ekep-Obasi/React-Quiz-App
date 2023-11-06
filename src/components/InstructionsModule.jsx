import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const StyledPopUpContent = styled.div`
  padding: 0 0.5rem;
  h2 {
    margin-top: 0;
    color: #333;
    font-family: Tahoma, Arial, sans-serif;
  }

  ul {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;

    li {
      line-height: 1rem;
      padding: 0.5rem 0;
    }
  }
`;

const InstructionsModule = () => {
  return (
    <StyledPopUpContent>
      <h2>Quiz Instructions</h2>

      <ul>
        <li>
          The quizzes consists of questions carefully designed to help you
          self-assess your knowledge
        </li>
        <li>Each question in the quiz &rsquo;true or false&rsquo; format.</li>
        <li>
          After responding to a question, click on the &rsquo;Next
          Question&rsquo; button at the bottom
        </li>
        <li>
          The total score for the quiz is based on your responses to all
          questions
        </li>
        <h3>Have Fun!</h3>
      </ul>
      <Link to="/setup-quiz">
        <Button type="button">Start Quiz</Button>
      </Link>
    </StyledPopUpContent>
  );
};

export default InstructionsModule;
