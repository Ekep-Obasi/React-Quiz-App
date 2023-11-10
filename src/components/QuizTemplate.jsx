/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { booleanResponse } from '../constants/questions';
import { shuffleArray } from '../utils';
import { Box, CountDown, QuizChoiceOptions } from '.';
import { useApp } from '../context/AppContext';

const OptionBox = memo((props) => {
  const { setScore, disabled, setDisabled } = useApp();

  const options = useMemo(() => {
    return shuffleArray([...props.incorrect_answers, props.correct_answer]);
  }, [props.correct_answer]);

  function validateResponse(value) {
    if (!disabled && value === props.correct_answer) {
      setDisabled(true);
      setScore((prev) => prev + 10);
      return true;
    }
    setDisabled(true);
    return false;
  }

  return (
    <Box direction="column">
      {props.type === 'multiple' ? (
        <>
          {options?.map((value, i) => (
            <QuizChoiceOptions
              key={i}
              label={value}
              validate={validateResponse}
            />
          ))}
        </>
      ) : (
        <>
          {booleanResponse.map((value, i) => (
            <QuizChoiceOptions
              key={i}
              label={value}
              validate={validateResponse}
            />
          ))}
        </>
      )}
    </Box>
  );
});

export default memo(function QuizTemplate({ category, question, ...props }) {
  const { quiz } = useApp();

  return (
    <StyledQuizTemplate direction="column">
      <Box className="template__header">
        <span
          className="quiz__category"
          dangerouslySetInnerHTML={{
            __html: category,
          }}
        />
        <CountDown questionCount={quiz.length} />
      </Box>
      <span
        className="quiz__question"
        dangerouslySetInnerHTML={{
          __html: question,
        }}
      />
      <OptionBox {...props} />
    </StyledQuizTemplate>
  );
});

const StyledQuizTemplate = styled(Box)`
  width: 33%;
  min-width: 350px;
  min-height: 235px;
  border-radius: 12px;
  border: 1px solid lightgrey;
  margin: 0 auto;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: ${(props) => props.theme.colors.white};
  transform: translate(-50%, -50%);
  ${(props) => props.theme.shadow}

  .template__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .quiz__category {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    width: fit-content;
    padding: 0.5rem 0.8rem;
    border-radius: 16px;
    background-color: #8b3dff;
  }

  .quiz__question {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
