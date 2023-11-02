import React from 'react';
import styled from '@emotion/styled';
import Box from './Box';

const StyledSelect = styled.select`
  padding: 0.3em;
  width: 100%;

  &:focus {
    outline: none;
  }

  & > option {
    padding: 1rem;
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
    <Box>
      <label>{area_label}</label>
      <StyledSelect {...props}>
        {data?.map(({ label, value }) => (
          <StyledOption value={value}>{label}</StyledOption>
        ))}
      </StyledSelect>
    </Box>
  );
}

export default DropDown;
