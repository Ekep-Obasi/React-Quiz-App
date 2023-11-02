import React from 'react';
import styled from '@emotion/styled';
import PopUp from '../components/PopUp';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function Guide() {
  return (
    <StyledContainer>
      <AnimatedText />
      <Link to="#popup1">
        <Button>Let&rsquo;s GO</Button>
      </Link>
      <PopUp />
    </StyledContainer>
  );
}

export default Guide;
