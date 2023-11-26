import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Header components in App', () => {
  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders Quiz components in App', () => {
  render(<App />);

  const quizElement = screen.getByTestId('quiz');
  expect(quizElement).toBeInTheDocument();
});

test('renders heading / title in App', () => {
  render(<App />);

  const heading = screen.getByText(/Quiz Game/i);
  expect(heading).toBeInTheDocument();
});
