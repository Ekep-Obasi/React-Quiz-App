import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { AnimatedText, Button, InstructionsModule, PopUp } from '../components';
import PageTemplate from '../components/PageTemplate';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  gap: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .popup__btn {
    margin: 2rem;
  }
`;

function Landing() {
  const [searchParams, setSearchParmas] = useSearchParams({
    modal_show: false,
  });

  const OpenModal = () => {
    setSearchParmas({ modal_show: true });
  };

  return (
    <PageTemplate>
      <StyledContainer>
        <AnimatedText />
        <Button className="popup__btn" onClick={OpenModal}>
          Let&rsquo;s Go
        </Button>
        <PopUp isOpen={searchParams.get('modal_show')}>
          <InstructionsModule />
        </PopUp>
      </StyledContainer>
    </PageTemplate>
  );
}

export default Landing;
