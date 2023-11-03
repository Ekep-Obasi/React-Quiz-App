import React from 'react';
import styled from '@emotion/styled';
import Box from './Box';

const StyledSelect = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
  }

  option {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const StyledOption = styled.option`
  padding: 1rem;

  &:hover {
    background-color: red;
  }
`;

function DropDown({ data = [], area_label, ...props }) {
  return (
    <Box direction="column" spacing="5px">
      <label>{area_label}</label>
      <StyledSelect {...props}>
        {data?.map(({ label, value }) => (
          <StyledOption key={value} value={value}>
            {label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Box>
  );
}

export default DropDown;
