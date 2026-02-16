import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Logout = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    navigate("/login");
  }, [navigate, setIsAuthenticated]);

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
