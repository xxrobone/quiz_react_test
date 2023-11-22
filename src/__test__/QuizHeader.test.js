import { render, screen } from '@testing-library/react';
import QuizHeader from '../components/quiz/QuizHeader';

test('renders QuizHeader component with the correct question', () => {
  const mockQuestion = 'What does HTML stand for?';

  render(<QuizHeader question={mockQuestion} />);

  const quizHeaderElement = screen.getByTestId('quiz-header');
  expect(quizHeaderElement).toBeInTheDocument();

  expect(quizHeaderElement).toHaveClass('quiz-header');

  const questionElement = screen.getByRole('heading', { name: mockQuestion });
  expect(questionElement).toBeInTheDocument();
});
