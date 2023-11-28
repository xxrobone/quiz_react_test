import { render, screen, fireEvent } from '@testing-library/react';
import QuizQuestion from '../components/quiz/QuizQuestion';

describe('renders QuizQuestion component with choices and handles interaction', () => {
  test('renders QuizHeader element on the screen', () => {
    render(<QuizQuestion questionData='Random question' />);
    const quizQuestionElement = screen.getByTestId('quiz-question');
    expect(quizQuestionElement).toBeInTheDocument();
  });

  test('renders the component with choices and handles interaction', () => {
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

    Object.values(mockQuestionData).forEach((choice) => {
      const choiceElement = screen.queryByText(choice);
      expect(choiceElement).toBeInTheDocument();
    });

    let listitems = screen.queryAllByTestId('choice');
    expect(listitems.length).toBe(4);

    fireEvent.click(screen.getByLabelText('Choice A'));
    expect(screen.getByLabelText('Choice A')).toBeChecked();

    fireEvent.click(screen.queryByRole('button', { name: /submit/i }));
    expect(mockOnAnswerSubmit).toHaveBeenCalledWith('a');

    expect(screen.queryByText('Choice A')).not.toBeChecked();
  });
});
