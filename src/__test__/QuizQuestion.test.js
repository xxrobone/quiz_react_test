import { render, screen, fireEvent } from '@testing-library/react';
import QuizQuestion from '../components/quiz/QuizQuestion';

test('renders QuizQuestion component with choices and handles interaction', () => {
  const mockQuestionData = {
    a: 'Choice A',
    b: 'Choice B',
    c: 'Choice C',
    d: 'Choice D',
  };
  const mockOnAnswerSubmit = jest.fn();

  render(
    <QuizQuestion
      questionData={mockQuestionData}
      onAnswerSubmit={mockOnAnswerSubmit}
    />
  );

  const quizQuestionElement = screen.getByTestId('quiz-question');
  expect(quizQuestionElement).toBeInTheDocument();

  Object.values(mockQuestionData).forEach((choice) => {
    const choiceElement = screen.getByText(choice);
    expect(choiceElement).toBeInTheDocument();
  });

  let listitems = screen.getAllByTestId('choice');
  expect(listitems.length).toBe(4);

  fireEvent.click(screen.getByLabelText('Choice A'));
  expect(screen.getByLabelText('Choice A')).toBeChecked();

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(mockOnAnswerSubmit).toHaveBeenCalledWith('a');

  expect(screen.getByLabelText('Choice A')).not.toBeChecked();
});
