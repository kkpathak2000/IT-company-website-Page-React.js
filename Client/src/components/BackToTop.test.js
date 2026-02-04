import { render, screen, fireEvent } from '@testing-library/react';
import BackToTop from './BackToTop';

describe('BackToTop Component', () => {
  test('should not be visible initially', () => {
    render(<BackToTop />);
    const button = screen.queryByRole('button', { name: /back to top/i });
    expect(button).not.toBeInTheDocument();
  });

  test('should be visible after scrolling down', () => {
    render(<BackToTop />);

    // Simulate scroll
    window.scrollY = 400;
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toBeInTheDocument();
  });

  test('should scroll to top when clicked', () => {
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;

    render(<BackToTop />);

    // Simulate scroll to make it visible
    window.scrollY = 400;
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /back to top/i });
    fireEvent.click(button);

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
