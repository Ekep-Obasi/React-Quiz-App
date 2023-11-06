import React from 'react';
import styled from '@emotion/styled';
import PopUp from '../components/PopUp';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import { useSearchParams } from 'react-router-dom';
import InstructionsModule from '../components/InstructionsModule';

const StyledContainer = styled.div`
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

function Landing() {
  const [searchParams, setSearchParmas] = useSearchParams({
    modal_show: false,
  });

  return (
    <StyledContainer>
      <AnimatedText />
      <Button
        style={{ margin: '2rem' }}
        onClick={() => setSearchParmas({ modal_show: true })}
      >
        Let&rsquo;s Go
      </Button>
      <PopUp isOpen={searchParams.get('modal_show')}>
        <InstructionsModule />
      </PopUp>
    </StyledContainer>
  );
}

export default Landing;
