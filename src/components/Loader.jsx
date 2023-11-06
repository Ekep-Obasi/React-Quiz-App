import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const Loader = ({ visibility = true }) => {
  const { themeObj } = useTheme();

  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={themeObj.colors.primary}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={visibility}
      />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export default Loader;
