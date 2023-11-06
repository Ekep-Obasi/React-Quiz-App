import styled from '@emotion/styled';
import { css } from '@emotion/react';

function ColumnBoxStyles(spacing = '1px') {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${spacing};
    gap: 12px;
  `;
}

const Box = styled.div`
  width: 100%;
  margin: 0 0.1rem;

  ${(props) => props.direction === 'column' && ColumnBoxStyles(props.spacing)}
`;

export default Box;
