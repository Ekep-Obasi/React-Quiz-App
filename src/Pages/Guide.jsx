import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Guide() {
  return (
    <StyledContainer>
      <h1>Quiz Guide</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        tempore similique iure, officia fugit voluptas aliquid magnam saepe
        reprehenderit quidem aperiam libero? Quasi odio iusto voluptatibus id in
        ut aliquam voluptatum cum nam, nostrum placeat. Excepturi totam numquam
        non, omnis tenetur magnam error, quisquam minima possimus cumque, quam
        deserunt vitae.
      </p>
      <button type="button">
        <Link to="/quiz1">Start Quiz</Link>
      </button>
    </StyledContainer>
  );
}

export default Guide;
