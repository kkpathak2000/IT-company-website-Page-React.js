import { render, screen } from '@testing-library/react';
import Contact from './Contact';

// Mock axios to avoid ESM issues and network calls
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} }))
}));

describe('Contact Component Accessibility and UX', () => {
  test('renders character counters with the correct text-info class', () => {
    render(<Contact />);

    const counters100 = screen.getAllByText('0/100');
    const messageCounter = screen.getByText('0/500');

    expect(counters100).toHaveLength(2);
    expect(messageCounter).toBeInTheDocument();

    counters100.forEach(counter => {
      expect(counter).toHaveClass('text-info');
    });
    expect(messageCounter).toHaveClass('text-info');
  });

  test('character counters have aria-live="polite"', () => {
    render(<Contact />);

    const counters = screen.getAllByText(/0\/(100|500)/);
    counters.forEach(counter => {
      expect(counter).toHaveAttribute('aria-live', 'polite');
    });
  });
});
