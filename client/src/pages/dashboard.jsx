import React from 'react';
import '../assets/css/dashboard.css';

const Dashboard = () => {
  // Data separated from UI for clean code
  const statsData = [
    { label: "Total Invested", value: "KES 6,500" },
    { label: "Expected Returns", value: "KES 14,300" },
    { label: "Active Investments", value: "2" },
    { label: "Available Balance", value: "KES 1,100" },
  ];

  const investmentsData = [
    { id: 1, package: "Starter", amount: "KES 500", returns: "KES 1,100", status: "completed", date: "12 Feb 2026" },
    { id: 2, package: "Silver", amount: "KES 1,000", returns: "KES 2,400", status: "active", date: "19 Feb 2026" },
    { id: 3, package: "Gold", amount: "KES 5,000", returns: "KES 12,000", status: "pending", date: "—" },
  ];

  const menuItems = ["Dashboard", "My Investments", "Withdraw", "Profile", "Logout"];

  return (
    <div className="dashboard-container">
      <div className="wrapper">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* In your Sidebar section */}
          <div className="brand">Future Pay <span>Earns</span></div>
          <nav className="menu">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                className={`menu-item ${index === 0 ? 'active' : ''}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="topbar">
            <h1>Welcome back, Paul</h1>
            <div className="user-badge">User ID: FPE-1021</div>
          </div>

          {/* STATS GRID */}
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* INVESTMENTS TABLE */}
          <div className="section">
            <h2>My Investments</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Amount</th>
                    <th>Returns</th>
                    <th>Status</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentsData.map((inv) => (
                    <tr key={inv.id}>
                      <td>{inv.package}</td>
                      <td>{inv.amount}</td>
                      <td>{inv.returns}</td>
                      <td>
                        <span className={`status ${inv.status}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td>{inv.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="actions">
              <button className="btn primary">New Investment</button>
              <button className="btn secondary">Request Withdrawal</button>
            </div>
          </div>
        </main>
      
      </div>
    </div>
  );
};

export default Dashboard;