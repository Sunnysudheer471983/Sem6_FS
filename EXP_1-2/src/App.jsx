import './index.css';
import { useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Logs from './pages/Logs';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <Header title="EcoTrack" />
      <main className="content">
        <div className="page-container">
          <div className="dashboard-section">
            <Dashboard />
            <Logs />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;