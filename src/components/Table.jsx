import React from 'react';
import styled from '@emotion/styled';

const Table = ({ data, row }) => {
  return (
    <StyledTable>
      <tr>
        {row.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
      {data.map(({ question, correct_answer }, key) => (
        <tr key={key}>
          <td dangerouslySetInnerHTML={{ __html: key + 1 }} />
          <td dangerouslySetInnerHTML={{ __html: question }} />
          <td dangerouslySetInnerHTML={{ __html: correct_answer }} />
        </tr>
      ))}
    </StyledTable>
  );
};

const StyledTable = styled.table`
  color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  min-width: 90%;

  th,
  tr,
  td {
    padding: 0.5rem;
    background: ${(props) =>
      props.theme.bg.primary === '#fff'
        ? props.theme.colors.grey
        : props.theme.colors.dark};
    border: 1px solid black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export default Table;
