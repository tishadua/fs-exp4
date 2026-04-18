import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [dashboardStatus, setDashboardStatus] = useState('loaded');

  const sampleData = [
    { id: 1, title: 'Card 1', description: 'This is the first card' },
    { id: 2, title: 'Card 2', description: 'This is the second card' },
    { id: 3, title: 'Card 3', description: 'This is the third card' },
  ];

  return (
    <div className="App">
      <Header title="React Testing Experiment" />
      
      <div className="content">
        <section className="section">
          <h2>Button Component Test</h2>
          <p>Click count: {count}</p>
          <Button text="Click Me!" onClick={() => setCount(count + 1)} />
        </section>

        <section className="section">
          <h2>Form Component Test</h2>
          <Form />
        </section>

        <section className="section">
          <h2>Dashboard Component Test</h2>
          <div className="dashboard-controls">
            <button onClick={() => setDashboardStatus('loading')}>Loading</button>
            <button onClick={() => setDashboardStatus('error')}>Error</button>
            <button onClick={() => setDashboardStatus('empty')}>Empty</button>
            <button onClick={() => setDashboardStatus('loaded')}>Loaded</button>
          </div>
          <Dashboard status={dashboardStatus} data={dashboardStatus === 'loaded' ? sampleData : []} />
        </section>
      </div>
    </div>
  );
}

export default App;
