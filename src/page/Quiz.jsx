/* eslint-disable react/jsx-pascal-case */
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Box, Button, PageTemplate, ProgressBar, QuizTemplate } from '../components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import styled from '@emotion/styled';

function Quiz() {
  const { score, quiz } = useApp();

  const { id } = useParams();

  const questionIndex = useMemo(() => +id, [id]);

  const currentQuestionNumber = +id + 1;

  const numberOfQuestions = quiz.length;

  return (
    <PageTemplate>
      {quiz.length !== 0 && (
        <StyledPage>
          <Box className="quiz__top">
            <Box className="quiz__score">Score: {score}</Box>
            <Box className="quiz__questionCount">
              Question {currentQuestionNumber} of {numberOfQuestions}
            </Box>
          </Box>
          <QuizTemplate {...quiz[questionIndex]} questionId={questionIndex} />
          <_QuizControls
            currentQuestionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
          />
        </StyledPage>
      )}
    </PageTemplate>
  );
}

const _QuizControls = ({ currentQuestionIndex, numberOfQuestions }) => {
  return (
    <Box className="quiz__controls">
      <Box className="button__container">
        <Link
          replace
          to={
            currentQuestionIndex === 0
              ? '/setup-quiz'
              : `/quiz/${currentQuestionIndex - 1}`
          }
        >
          <Button className="control__buttons" type="button">
            <AiOutlineArrowLeft /> &nbsp; Previous
          </Button>
        </Link>

        <Link
          replace
          to={
            currentQuestionIndex === numberOfQuestions - 1
              ? '/results'
              : `/quiz/${currentQuestionIndex + 1}`
          }
        >
          <Button className="control__buttons" type="button">
            Next &nbsp; <AiOutlineArrowRight />
          </Button>
        </Link>
      </Box>
      <ProgressBar
        maxVal={numberOfQuestions}
        value={currentQuestionIndex + 1}
      />
    </Box>
  );
};

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;

  .quiz__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    color: ${(props) =>
      props.theme.bg.primary === '#0d1117'
        ? props.theme.colors.white
        : props.theme.colors.dark};
    font-size: 1.3rem;
    font-weight: 500;

    .quiz__score {
      width: fit-content;
    }

    .quiz__questionCount {
      width: fit-content;
    }
  }

  .quiz__controls {
    margin: 0 auto;
    width: 95%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem;
    position: absolute;
    bottom: 15px;

    .button__container {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .control__buttons {
        background-color: ${(props) => props.theme.colors.primary};
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default Quiz;
