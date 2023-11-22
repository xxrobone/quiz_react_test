import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quiz from '../components/quiz/Quiz';
import { act } from 'react-dom/test-utils';

test('renders Quiz component that serves as a wrapper', () => {
  render(<Quiz />);

  const quizElement = screen.getByTestId('quiz');
  expect(quizElement).toBeInTheDocument();

  const quizHeaderElement = screen.getByTestId('quiz-header');
  expect(quizHeaderElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button', { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});

test('renders Quiz component and shows results after answering questions', async () => {
  render(<Quiz />);

  const answerA = screen.getByLabelText('Hyper Mouse Lightning');
  userEvent.click(answerA);

act(() => {
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
})

  const answerB = screen.getByLabelText('Cascading style sheets');
  userEvent.click(answerB);

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  const answerC = screen.getByLabelText('Python');
  userEvent.click(answerC);

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  const answerD = screen.getByLabelText('With the help of a compiler');
  userEvent.click(answerD);

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  const answerE = screen.getByLabelText('1960');
  userEvent.click(answerE);

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    const resultTextElement = screen.getByText(/You answered correctly on:/i);
    expect(resultTextElement).toBeInTheDocument();
  });
});
