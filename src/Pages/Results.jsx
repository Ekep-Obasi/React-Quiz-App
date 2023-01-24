import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #defdef;
`;

function Results() {
  return (
    <StyledContent>
      <h1>Results Page</h1>
      <button type="button">
        <Link to="/">Back to Home</Link>
      </button>
    </StyledContent>
  );
}

export default Results;
