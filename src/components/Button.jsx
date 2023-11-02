import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 0.3em 1em;
  
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
