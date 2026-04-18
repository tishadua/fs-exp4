import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component Snapshots', () => {
  test('matches snapshot for loading state', () => {
    const { container } = render(<Dashboard status="loading" data={[]} />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot for error state', () => {
    const { container } = render(<Dashboard status="error" data={[]} />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot for empty state', () => {
    const { container } = render(<Dashboard status="empty" data={[]} />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot for loaded state with data', () => {
    const sampleData = [
      { id: 1, title: 'Card 1', description: 'Description 1' },
      { id: 2, title: 'Card 2', description: 'Description 2' },
      { id: 3, title: 'Card 3', description: 'Description 3' },
    ];
    const { container } = render(<Dashboard status="loaded" data={sampleData} />);
    expect(container).toMatchSnapshot();
  });

  test('renders loading state correctly', () => {
    const { getByText } = render(<Dashboard status="loading" data={[]} />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    const { getByText } = render(<Dashboard status="error" data={[]} />);
    expect(getByText(/Error loading data!/i)).toBeInTheDocument();
  });

  test('renders empty state correctly', () => {
    const { getByText } = render(<Dashboard status="empty" data={[]} />);
    expect(getByText(/No data available/i)).toBeInTheDocument();
  });

  test('renders loaded state with data correctly', () => {
    const sampleData = [
      { id: 1, title: 'Card 1', description: 'Description 1' },
      { id: 2, title: 'Card 2', description: 'Description 2' },
    ];
    const { getByText } = render(<Dashboard status="loaded" data={sampleData} />);
    expect(getByText(/Dashboard/i)).toBeInTheDocument();
    expect(getByText(/Card 1/i)).toBeInTheDocument();
    expect(getByText(/Card 2/i)).toBeInTheDocument();
  });
});
