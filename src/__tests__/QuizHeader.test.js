import { render, screen } from '@testing-library/react';
import QuizHeader from '../components/quiz/QuizHeader';

describe('Check so quizHeader renders the right content', () => {
  
  test('quiz-header is rendered', () => {
  render(<QuizHeader />)
  const quizHeaderElement = screen.getByTestId('quiz-header');
  expect(quizHeaderElement).toBeInTheDocument();
})

test('renders QuizHeader component with the correct question', () => {
  const mockQuestion = 'What does HTML stand for?';

  render(<QuizHeader question={mockQuestion} />);

  const questionElement = screen.getByRole('heading', { name: mockQuestion });
  expect(questionElement).toBeInTheDocument();
 
})
})
