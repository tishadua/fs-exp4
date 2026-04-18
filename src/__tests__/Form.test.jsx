import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

describe('Form Component', () => {
  test('renders form with input fields', () => {
    render(<Form />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('fills input fields and submits form successfully', async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');

    fireEvent.click(submitButton);

    expect(await screen.findByText(/Form submitted successfully!/i)).toBeInTheDocument();
  });

  test('shows validation error when name is empty', async () => {
    render(<Form />);

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
  });

  test('shows validation error when email is empty', async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText(/Name:/i);
    await user.type(nameInput, 'John Doe');

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  test('shows validation error when email is invalid', async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'invalid-email');

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/Email is invalid/i)).toBeInTheDocument();
  });

  test('clears form after successful submission', async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    fireEvent.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
