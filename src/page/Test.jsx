/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { difficultyLevel, quizCategories } from '../constants';
import { quizType } from '../constants/questions';
import DropDown from '../components/Dropdown';

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: palegreen;
  width: 33.3%;
  min-width: 320px;
  padding: 0.5rem;
`;

function Test() {
  const [searchParams, setSearchParams] = useSearchParams({
    type: 'boolean',
    level: 'any',
    category: 'any',
    amount: 10,
  });

  async function getQuiz(quizQuery) {
    const { level = 'any', amount = 12, type, category } = quizQuery;

    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=${type}&category=${category}`
    );

    const results = await res.json();

    return results;
  }

  const submitForm = (e) => {
    e.preventDefault();
    getQuiz(searchParams);
  };

  return (
    <Page>
      <div>Choose Question Categories</div>
      <StyledForm onSubmit={submitForm}>
        <DropDown
          data={quizType}
          area_label="Quiz Type"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.type = e.target.value;
              return prev;
            })
          }
        />

        <DropDown
          data={quizCategories}
          area_label="Select Question Category"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.category = e.target.value;
              return prev;
            })
          }
        />

        <div>
          <label>Select options difficulty</label>
          <select
            onChange={(e) =>
              setSearchParams((prev) => {
                prev.level = e.target.value.toLocaleLowerCase();
                return prev;
              })
            }
          >
            {difficultyLevel.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter the number of questions"
            onChange={(e) =>
              setSearchParams((prev) => {
                prev.amount = e.target.value;
                return prev;
              })
            }
          />
        </div>
        <button type="submit">Done</button>
      </StyledForm>
    </Page>
  );
}

export default Test;
