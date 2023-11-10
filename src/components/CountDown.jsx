import React from 'react';
import styled from '@emotion/styled';
import { LuTimer } from 'react-icons/lu';
import useTimer from '../hooks/useTimer';

const CountDown = ({ questionCount }) => {
  const [minutes, seconds] = useTimer(questionCount * 60);
  return (
    <StyledWrapper>
      <LuTimer size={28} />
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 2px 8px;
  max-width: 90px;
  border-radius: 16px;
  font-weight: bold;
`;

export default CountDown;
