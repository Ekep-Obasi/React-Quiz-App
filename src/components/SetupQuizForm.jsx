import React from 'react';
import styled from '@emotion/styled';
import {
  ErrorTypes,
  difficultyLevel,
  quizCategories,
  quizType,
} from '../constants';
import { Box, Input, Button, DropDown } from '.';
import fetchQuizes from '../api/fetchData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { decodeSearchParams } from '../utils/decodeSearchParams/index';
import { useErrorBoundary } from 'react-error-boundary';

const SetupQuizForm = () => {
  const navigate = useNavigate();

  const { setQuiz, setLoading } = useApp();

  const [searchParams, setSearchParams] = useSearchParams();

  const { level, amount, type, category } = decodeSearchParams(searchParams);

  const { showBoundary } = useErrorBoundary();

  const onChangeEvent = (e, searchParamKey) => {
    setSearchParams((prev) => {
      prev.set(searchParamKey, e.target.value);
      return prev;
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const query = searchParams.toString();
      const { response, errorCode } = await fetchQuizes(query);
      if (errorCode !== 0) {
        throw new Error(ErrorTypes[`${errorCode}`].message);
      }
      setQuiz(response);
      navigate('/quiz/0');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      showBoundary(err);
    }
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <DropDown
        value={type}
        data={quizType}
        area_label="Quiz Type"
        onChange={(e) => onChangeEvent(e, 'type')}
      />

      <DropDown
        value={category}
        data={quizCategories}
        area_label="Select question category"
        onChange={(e) => onChangeEvent(e, 'category')}
      />

      <DropDown
        value={level}
        data={difficultyLevel}
        area_label="Select question difficulty"
        onChange={(e) => onChangeEvent(e, 'level')}
      />

      <Box direction="column" spacing={1}>
        <label>Input Number of Questions</label>
        <Input
          value={amount || 1}
          min={1}
          max={50}
          type="number"
          placeholder="Enter the number of questions"
          onChange={(e) => onChangeEvent(e, 'amount')}
          required
        />
      </Box>
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  width: 33.3%;
  min-width: 350px;
  padding: 1.5rem;
  gap: 15px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.theme.shadow}
`;

export default SetupQuizForm;
