import { useState } from 'react';
import logsData from "./logsData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');
  
  const totalCarbon = logsData.reduce(
    (sum, log) => sum + log.carbon,
    0
  );

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </button>
        <span className="tab-separator">|</span>
        <button 
          className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </div>
      
      {activeTab === 'summary' && (
        <div className="dashboard-content">
          <p style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>{totalCarbon} Kgs</p>
          <p>Total Carbon Footprint</p>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="dashboard-content">
          <h3>Analytics</h3>
          <p>Analytics data goes here</p>
          <ul>
            <li>High Carbon Activities: {logsData.filter(log => log.carbon >= 4).length}</li>
            <li>Total Activities: {logsData.length}</li>
            <li>Average Carbon: {(totalCarbon / logsData.length).toFixed(2)} Kgs</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
