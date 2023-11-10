import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { Button } from '.';

const StyledPopup = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.state ? 'visible' : 'hidden')};
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  min-width: 360px;
  border-radius: 5px;
  width: 34%;
  transition: top 0.2s linear;
  top: ${(props) => (props.state ? '150px' : '-500px')};
  z-index: 999;

  .close {
    align-self: flex-end;
    padding: 0;
    transition: all 200ms;
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      color: orange;
      transform: rotate(90deg);
    }
  }
`;

const PopUp = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <StyledPopup state={searchParams.get('modal_show')}>
      <StyledContent>
        <Button
          type="button"
          onClick={() => setSearchParams({})}
          className="close"
        >
          &times;
        </Button>
        {children}
      </StyledContent>
    </StyledPopup>
  );
};

export default PopUp;
