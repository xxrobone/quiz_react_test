import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quiz from '../components/quiz/Quiz';

const quizData = [
  {
    question: 'What does HTML stand for?',
    a: 'Hyper Mouse Lightning',
    b: 'Hypertext Markdown Language',
    c: 'Hypertext Markup Language',
    d: 'Hypertext Markymark Language',
    correct: 'c',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Cool sassy style',
    b: 'Cascading sassy sheets',
    c: 'Cascading style sheets',
    d: 'Cascading sheets style',
    correct: 'c',
  },
  {
    question: 'Which language runs in the web browser?',
    a: 'JAVA',
    b: 'Python',
    c: 'C#',
    d: 'Javascript',
    correct: 'd',
  },
  {
    question: 'How does a computer understand javascript?',
    a: 'With the help of integers',
    b: 'With the help of vs code',
    c: 'With help of the web browser',
    d: 'With the help of a compiler',
    correct: 'd',
  },
  {
    question: 'When was the first workable internet tested?',
    a: '1980',
    b: '1960',
    c: '2000',
    d: '1990',
    correct: 'b',
  },
];

describe('The different components renders as expected', () => {
  test('renders Quiz component that serves as a wrapper', () => {
    render(<Quiz />);
    const quizElement = screen.queryByTestId('quiz');
    expect(quizElement).toBeInTheDocument();
  });

  test('renders quiz-header as expected', () => {
    render(<Quiz />);
    const quizHeaderElement = screen.queryByTestId('quiz-header');
    expect(quizHeaderElement).toBeInTheDocument();
  });

  test('renders a submit button', () => {
    render(<Quiz />);
    const buttonElement = screen.queryByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Test: User at question 1', () => {
  test('queries by q2, expects it not to be in doc', () => {
    render(<Quiz />);
    const q2Element = screen.queryByText(quizData[1].question);
    expect(q2Element).not.toBeInTheDocument();
  });

  test('clicks through to question 2, expects q1 not to be in doc', async () => {
    render(<Quiz />);
    const q1Element = screen.queryByText(quizData[0].question);
    expect(q1Element).toBeInTheDocument();
    const answerA = screen.getByLabelText('Hyper Mouse Lightning');
    userEvent.click(answerA);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const q2Element = screen.queryByText(quizData[1].question);
    expect(q2Element).toBeInTheDocument();
    console.log(q2Element);

    await waitFor(() => {
      const q1Element = screen.queryByText(quizData[0].question);
      expect(q1Element).not.toBeInTheDocument();
    });
  });
});

describe('Test: User at question 2', () => {
  test('clicks through to question 3, expects q2 not to be in doc', async () => {
    render(<Quiz />);    
    
    const answer1 = screen.getByLabelText('Hypertext Markup Language');
    userEvent.click(answer1);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer2 = screen.getByLabelText('Cascading style sheets');
    userEvent.click(answer2);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const q3Element = screen.queryByText(quizData[2].question);
      expect(q3Element).toBeInTheDocument();
    });

    const q2AfterClick = screen.queryByText(quizData[1].question);
    expect(q2AfterClick).not.toBeInTheDocument();
  });
});
describe('Test: User at question 3', () => {
  test('clicks through to question 4, expects q3 not to be in doc', async () => {
    render(<Quiz />);    
    
    const answer1 = screen.getByLabelText('Hypertext Markup Language');
    userEvent.click(answer1);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer2 = screen.getByLabelText('Cascading style sheets');
    userEvent.click(answer2);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer3 = screen.getByLabelText('JAVA');
    userEvent.click(answer3);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const q4Element = screen.queryByText(quizData[3].question);
      expect(q4Element).toBeInTheDocument();
    });

    const q3AfterClick = screen.queryByText(quizData[1].question);
    expect(q3AfterClick).not.toBeInTheDocument();
  });
});

describe('User triggered events, Shows results after answering questions', () => {
  test('User answers 3 questions right, check that it renders the right result', async () => {
    render(<Quiz />);

    const answer1 = screen.getByLabelText('Hypertext Markup Language');
    userEvent.click(answer1);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer2 = screen.getByLabelText('Cascading style sheets');
    userEvent.click(answer2);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer3 = screen.getByLabelText('Javascript');
    userEvent.click(answer3);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer4 = screen.getByLabelText('With the help of vs code');
    userEvent.click(answer4);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer5 = screen.getByLabelText('1990');
    userEvent.click(answer5);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const resultHeadlineElement = screen.queryByText(
        /You answered correctly on:/i
      );
      expect(resultHeadlineElement).toBeInTheDocument();
    });
    const resultText = screen.queryByText(/3 out of 5 questions/i);
    expect(resultText).toBeInTheDocument();
  });
});

describe('User triggered events, Shows results after answering all questions wrong', () => {
  test('User no question right, check that it renders the right result', async () => {
    render(<Quiz />);

    const answer1 = screen.getByLabelText('Hyper Mouse Lightning');
    userEvent.click(answer1);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer2 = screen.getByLabelText('Cool sassy style');
    userEvent.click(answer2);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer3 = screen.getByLabelText('JAVA');
    userEvent.click(answer3);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer4 = screen.getByLabelText('With the help of vs code');
    userEvent.click(answer4);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const answer5 = screen.getByLabelText('2000');
    userEvent.click(answer5);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const resultHeadlineElement = screen.queryByText(
        /You answered correctly on:/i
      );
      expect(resultHeadlineElement).toBeInTheDocument();
    });
    const resultText = screen.queryByText(/0 out of 5 questions/i);
    expect(resultText).toBeInTheDocument();
    
    let correctAnswer = screen.queryByText('Correct');
    expect(correctAnswer).not.toBeInTheDocument();
  });
});
