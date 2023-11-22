import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders a header title', () => {
  render(<Header />);
  const title = screen.getByText(/Code Quiz/i);
  expect(title).toBeInTheDocument();
});