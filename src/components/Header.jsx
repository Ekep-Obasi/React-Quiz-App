import React from 'react';
import styled from '@emotion/styled';
import { ToggleTheme } from '.';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="app__logo">
        BrainTeasers ⚡
      </Link>
      <ToggleTheme />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  min-height: 65px;
  padding: 0 2rem;
  gap: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.bg.primaryGradient}

  .app__logo {
    font-family: 'Agbalumo', cursive;
    font-size: 2.2rem;
    color: #fff;
  }
`;

export default Header;
