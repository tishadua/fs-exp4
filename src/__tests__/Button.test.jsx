import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button text="Click Me!" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click Me!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me!" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me!/i);
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
