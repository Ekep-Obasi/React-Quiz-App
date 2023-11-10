import React from 'react';
import styled from '@emotion/styled';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

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

export default Button;
