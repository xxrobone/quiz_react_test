import { render, screen } from '@testing-library/react';
import QuizChoice from '../components/quiz/QuizChoice';

test('That data is passed to the component', () => {
  const mockData = {
    id: 'a',
    label: 'Hyper Mouse Lightning',
    checked: false,
    onChange: () => {},
  };

  render(<QuizChoice {...mockData} />);

  // Check if the radio input is present
  const radioInput = screen.getByRole('radio');
  expect(radioInput).toBeInTheDocument();
  expect(radioInput).toHaveAttribute('id', mockData.id);
  expect(radioInput).toHaveAttribute('value', mockData.id);
  expect(radioInput).toHaveAttribute('name', 'answer');
  expect(radioInput).not.toHaveAttribute('checked');

  // Check if the label is present
  const label = screen.getByText(mockData.label);
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute('for', mockData.id);
});
