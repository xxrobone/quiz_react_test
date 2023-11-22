import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

test('renders Header component and checks so there is a title text - Code Quiz', () => {
  render(<Header />);

  const titleElement = screen.getByText(/Code Quiz/i);
  expect(titleElement).toBeInTheDocument();
});
