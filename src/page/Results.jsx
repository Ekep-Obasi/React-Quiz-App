import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Button, PageTemplate, Table } from '../components';

function Results() {
  const { setScore, score, quiz } = useApp();

  const verdict = () => {
    const val = (score * 0.1) / quiz.length;
    if (val >= 5.5) {
      return `Your Score ${score} / ${quiz.length * 10} 😱`;
    } else if (val <= 5) {
      return `Your Score ${score} / ${quiz.length * 10} 😐`;
    } else {
      return `Your Score ${score} / ${quiz.length * 10} 😪`;
    }
  };

  const scoreResult = verdict();

  return (
    <PageTemplate>
      <StyledContent>
        <h1>Results Page</h1>
        <div className="score">{scoreResult}</div>
        <Table row={['No', 'Question', 'Answer']} data={quiz} />
        <Link to="/">
          <Button type="button" onClick={() => setScore(0)}>
            Back to Home
          </Button>
        </Link>
      </StyledContent>
    </PageTemplate>
  );
}

const StyledContent = styled.div`
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1rem;

  h1 {
    font-size: 3.75rem;
    color: ${(props) =>
      props.theme.bg.primary === '#fff'
        ? props.theme.colors.dark
        : props.theme.colors.white};
    font-weight: 500;
    margin: 8px 0;

    @media screen and (max-width: 72em) {
      font-size: 2.75rem;
    }
  }

  .score {
    font-size: 2.25rem;
    ${(props) => props.theme.colors.gradient}

    @media screen and (max-width: 72em) {
      font-size: 1.75rem;
    }
  }
`;

export default Results;
