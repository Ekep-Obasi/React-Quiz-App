/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useApp } from '../context/AppContext';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';

const QuizChoiceOptions = ({ label, selected, ...props }) => {
  const [decision, setDecision] = useState(null);
  const { disabled, setDisabled } = useApp();
  const { id } = useParams();

  const OptionChange = (e) => {
    setDecision(props.validate(e.target.value));
  };

  useEffect(() => {
    setDecision(null);
    setDisabled(false);
  }, [id]);

  const returnSuccessFailureStyles = useCallback(
    (props) => {
      if (decision === null) {
        return props.theme.colors.white;
      }

      return decision
        ? css`
            background-color: ${props.theme.colors.success};
            color: ${props.theme.colors.white};
          `
        : css`
            background-color: ${props.theme.colors.success};
            color: ${props.theme.colors.white};
          `;
    },
    [id, decision]
  );

  const StyledOption = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    padding: 0.85rem;

    && {
      ${returnSuccessFailureStyles}
    }

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledOption htmlFor={label} aria-disabled={disabled}>
      <input
        id={label}
        type="radio"
        name="quiz"
        value={label}
        onChange={OptionChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </StyledOption>
  );
};

export default memo(QuizChoiceOptions);
