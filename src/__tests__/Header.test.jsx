import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders header with correct title', () => {
    render(<Header title="Test Title" />);
    const headerElement = screen.getByText(/Test Title/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders header with different title', () => {
    render(<Header title="Another Title" />);
    const headerElement = screen.getByText(/Another Title/i);
    expect(headerElement).toBeInTheDocument();
  });
});
