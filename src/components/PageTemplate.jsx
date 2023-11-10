import React from 'react';
import styled from '@emotion/styled';
import { Footer, Header, Loader } from '.';
import { useApp } from '../context/AppContext';

const PageTemplate = ({ children }) => {
  const { loading } = useApp();

  return (
    <StyledPageTemplate>
      <Header />
      <Loader visibility={loading} />
      {children}
      <Footer />
    </StyledPageTemplate>
  );
};

const StyledPageTemplate = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bg.primary};
`;

export default PageTemplate;
