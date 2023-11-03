import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { difficultyLevel, quizCategories } from '../constants';
import { quizType } from '../constants/questions';
import DropDown from '../components/Dropdown';
import Button from '../components/Button';
import Input from './Input';
import fetchQuizes from '../api/fetchData';

const Page = styled.div`
  h2 {
    margin: 2rem auto;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 100vh;
  width: 100%;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 33.3%;
  min-width: 320px;
  padding: 0.5rem;
  padding: 1.5rem;
  gap: 15px;
  border-radius: 8px;
`;

function SetupQuiz() {
  const [searchParams, setSearchParams] = useSearchParams({
    type: 'boolean',
    level: 'any',
    category: 'any',
    amount: 10,
  });

  async function getQuiz(quizQuery) {
    const [level = 'any', amount = 12, type, category] = [
      quizQuery.get('level'),
      quizQuery.get('amount'),
      quizQuery.get('type'),
      quizQuery.get('category'),
    ];

    const response = await fetchQuizes(
      `amount=${amount}&difficulty=${level}&type=${type}&category=${category}`
    );

    return response;
  }

  const submitForm = (e) => {
    e.preventDefault();
    getQuiz(searchParams);
  };

  return (
    <Page>
      <h2>Choose Question Categories</h2>
      <StyledForm onSubmit={submitForm}>
        <DropDown
          data={quizType}
          area_label="Quiz Type"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set('type', e.target.value);
              return prev;
            })
          }
        />

        <DropDown
          data={quizCategories}
          area_label="Select Question Category"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set('category', e.target.value);
              return prev;
            })
          }
        />

        <DropDown
          data={difficultyLevel}
          area_label="Select options difficulty"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set('level', e.target.value);
              return prev;
            })
          }
        />

        <Input
          type="number"
          placeholder="Enter the number of questions"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set('amount', e.target.value);

              return prev;
            })
          }
        />

        <Button type="submit">Done</Button>
      </StyledForm>
    </Page>
  );
}

export default SetupQuiz;
