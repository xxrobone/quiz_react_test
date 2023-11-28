import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('renders footer with @symbol', () => {

  test('renders footer with the copyright symbol', () => {
    render(<Footer />);

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  })

test('renders @ / copyright symbol', () => {
  render(<Footer />);

  const copyrightSymbol = screen.getByText(/©/i);
  expect(copyrightSymbol).toBeInTheDocument();
});
  
})
