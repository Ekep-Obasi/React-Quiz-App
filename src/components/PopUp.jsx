import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

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
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  min-width: 320px;
  border-radius: 5px;
  width: 30%;
  transition: all 0.3s ease-in-out;
  top: ${(props) => (props.state ? '100px' : '-500px')};

  .close {
    align-self: flex-end;
    transition: all 200ms;
    font-size: 30px;
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
    <StyledPopup
      state={searchParams.get('modal_show')}
      onClick={() => setSearchParams({})}
    >
      <StyledContent>
        <button
          type="button"
          onClick={() => setSearchParams({})}
          className="close"
        >
          ×
        </button>
        {children}
      </StyledContent>
    </StyledPopup>
  );
};

export default PopUp;
