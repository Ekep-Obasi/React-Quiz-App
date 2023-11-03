import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #fc6d6d;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
