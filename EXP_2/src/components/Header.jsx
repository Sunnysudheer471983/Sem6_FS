import { useAuth } from '../context/AuthContext';

const Header = ({ title }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>{title}</h1>
        <nav className="nav-links">
          <button className="nav-link active">
            Dashboard
          </button>
          <span className="tab-separator">|</span>
          <button className="nav-link">
            Logs
          </button>
          <span className="tab-separator">|</span>
          <button 
            onClick={handleLogout}
            className="nav-link logout-link"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
