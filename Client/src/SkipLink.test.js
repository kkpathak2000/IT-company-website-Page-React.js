import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders skip to main content link', () => {
  render(<App />);
  const skipLink = screen.getByText(/skip to main content/i);
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute('href', '#main-content');
});

test('renders main content area with correct id', () => {
  render(<App />);
  const mainContent = screen.getByRole('main');
  expect(mainContent).toBeInTheDocument();
  expect(mainContent).toHaveAttribute('id', 'main-content');
});
