import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import React from 'react';

// Mock axios to avoid ESM issues and network calls
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
  create: jest.fn(function () { return this; }),
  defaults: { adapter: {} }
}));

describe('Contact Component', () => {
  test('renders character counters for all fields', () => {
    render(<Contact />);
    expect(screen.getByText('0/100', { selector: '#name-counter' })).toBeInTheDocument();
    expect(screen.getByText('0/100', { selector: '#email-counter' })).toBeInTheDocument();
    expect(screen.getByText('0/500', { selector: '#message-counter' })).toBeInTheDocument();
  });

  test('updates character counters when typing', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(screen.getByText('8/100', { selector: '#name-counter' })).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(screen.getByText('16/100', { selector: '#email-counter' })).toBeInTheDocument();

    const messageInput = screen.getByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: 'Hello world' } });
    expect(screen.getByText('11/500', { selector: '#message-counter' })).toBeInTheDocument();
  });

  test('inputs have correct accessibility attributes', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-counter');
    expect(nameInput).toHaveAttribute('autoComplete', 'name');

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toHaveAttribute('aria-describedby', 'email-counter');
    expect(emailInput).toHaveAttribute('autoComplete', 'email');

    const messageInput = screen.getByLabelText(/Message/i);
    expect(messageInput).toHaveAttribute('aria-describedby', 'message-counter');
  });

  test('counters have aria-live="polite"', () => {
    render(<Contact />);
    expect(screen.getByText('0/100', { selector: '#name-counter' })).toHaveAttribute('aria-live', 'polite');
    expect(screen.getByText('0/100', { selector: '#email-counter' })).toHaveAttribute('aria-live', 'polite');
    expect(screen.getByText('0/500', { selector: '#message-counter' })).toHaveAttribute('aria-live', 'polite');
  });

  test('counter color changes to text-warning at 90% capacity', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'a'.repeat(89) } });
    expect(screen.getByText('89/100', { selector: '#name-counter' })).toHaveClass('text-info');

    fireEvent.change(nameInput, { target: { value: 'a'.repeat(90) } });
    expect(screen.getByText('90/100', { selector: '#name-counter' })).toHaveClass('text-warning');

    const messageInput = screen.getByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: 'a'.repeat(449) } });
    expect(screen.getByText('449/500', { selector: '#message-counter' })).toHaveClass('text-info');

    fireEvent.change(messageInput, { target: { value: 'a'.repeat(450) } });
    expect(screen.getByText('450/500', { selector: '#message-counter' })).toHaveClass('text-warning');
  });
});
