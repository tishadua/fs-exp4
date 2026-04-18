import './Dashboard.css';

function Dashboard({ status, data = [] }) {
  if (status === 'loading') {
    return <div className="dashboard loading">Loading...</div>;
  }

  if (status === 'error') {
    return <div className="dashboard error">Error loading data!</div>;
  }

  if (status === 'empty' || data.length === 0) {
    return <div className="dashboard empty">No data available</div>;
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card-list">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
