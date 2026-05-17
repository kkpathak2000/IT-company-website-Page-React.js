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

  test('counters change color when threshold is reached', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Name/i);

    // Below threshold
    fireEvent.change(nameInput, { target: { value: 'a'.repeat(89) } });
    const nameCounterBelow = screen.getByText('89/100', { selector: '#name-counter' });
    expect(nameCounterBelow).toHaveClass('text-info');
    expect(nameCounterBelow).not.toHaveClass('text-warning');

    // At threshold
    fireEvent.change(nameInput, { target: { value: 'a'.repeat(90) } });
    const nameCounterAt = screen.getByText('90/100', { selector: '#name-counter' });
    expect(nameCounterAt).toHaveClass('text-warning');
    expect(nameCounterAt).not.toHaveClass('text-info');

    const emailInput = screen.getByLabelText(/Email/i);

    // At threshold
    fireEvent.change(emailInput, { target: { value: 'a'.repeat(90) } });
    const emailCounterAt = screen.getByText('90/100', { selector: '#email-counter' });
    expect(emailCounterAt).toHaveClass('text-warning');

    const messageInput = screen.getByLabelText(/Message/i);

    // Below threshold
    fireEvent.change(messageInput, { target: { value: 'a'.repeat(449) } });
    const messageCounterBelow = screen.getByText('449/500', { selector: '#message-counter' });
    expect(messageCounterBelow).toHaveClass('text-info');

    // At threshold
    fireEvent.change(messageInput, { target: { value: 'a'.repeat(450) } });
    const messageCounterAt = screen.getByText('450/500', { selector: '#message-counter' });
    expect(messageCounterAt).toHaveClass('text-warning');
  });
});
