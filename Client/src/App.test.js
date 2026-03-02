import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Contact', () => () => <div data-testid="contact-mock">Contact Component</div>);

test('renders the Home navigation link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Footer with correct company name', () => {
  render(<App />);
  const footerElement = screen.getByText(/©.*IT Solutions Tech/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders the Footer with current year', () => {
  render(<App />);
  const currentYear = new Date().getFullYear().toString();
  const yearElement = screen.getByText(new RegExp(currentYear));
  expect(yearElement).toBeInTheDocument();
});

test('renders the Skip to main content link', () => {
  render(<App />);
  const skipLink = screen.getByText(/Skip to main content/i);
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute('href', '#main-content');
});
