import React from 'react';
import { Button, PageTemplate } from '../components';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.white};
  padding: 0 1rem;

  h1 {
    color: ${(props) => props.theme.colors.danger};
  }

  p {
    text-align: center;
    color: ${(props) =>
      props.theme.bg.primary === '#0d1117'
        ? props.theme.colors.white
        : props.theme.colors.dark};
  }

  .refresh {
    ${(props) => props.theme.bg.primaryGradient};
  }
`;

function Error({ error, resetErrorBoundary }) {
  return (
    <PageTemplate>
      <StyledWrapper>
        <h1>Error !!! 😥</h1>
        <p>{error.message}</p>
        <Button className="refresh" onClick={resetErrorBoundary}>
          Reload Page
        </Button>
      </StyledWrapper>
    </PageTemplate>
  );
}

export default Error;
