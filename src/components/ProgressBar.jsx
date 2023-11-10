import React from 'react';
import styled from '@emotion/styled';

const ProgressBar = (props) => {
  return (
    <StyledProgressBar>
      <StyledBarLevel {...props} />
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  width: 100%;
  height: 8px;
  padding: 0.1em 0;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  min-width: 340px;
`;

const StyledBarLevel = styled.div`
  width: ${(props) => `${(100 / props.maxVal) * props.value}%`};
  height: inherit;
  max-width: inherit;
  transition: 0.2s width ease-in;
  border-radius: 8px;
  ${(props) => props.theme.bg.primaryGradient}
`;

export default ProgressBar;
