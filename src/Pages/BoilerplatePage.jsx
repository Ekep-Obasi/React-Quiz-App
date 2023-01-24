/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #defdef;
`;

function BoilerplatePage({ number, path }) {
  return (
    <StyledContent>
      <h1>Page {number}</h1>
      <button type="button">
        <Link to={path}>Next Page</Link>
      </button>
    </StyledContent>
  );
}

export default BoilerplatePage;
