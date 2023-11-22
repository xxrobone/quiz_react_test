import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a header title', () => {
  render(<App />);
  const header = screen.getByText(/Code Quiz/i);
  expect(header).toBeInTheDocument();
});
