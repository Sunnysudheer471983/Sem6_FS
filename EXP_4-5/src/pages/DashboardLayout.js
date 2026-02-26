import { Link, Outlet } from "react-router-dom";
import Logout from "./Logout";

const DashboardLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#9bb3ec", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Dashboard Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#45464e",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(115, 119, 121, 0.6)",
        }}
      >
        {/* Title */}
        <h2
          style={{
            color: "#e5e7eb",
            marginBottom: "10px",
            letterSpacing: "1px",
          }}
        >
          Dashboard
        </h2>

        <hr style={{ borderColor: "#334155", marginBottom: "20px" }} />

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginBottom: "30px",
          }}
        >
          <Link style={linkStyle("#5bf18f")} to="summary">
            Summary
          </Link>

          <Link style={linkStyle("#3b82f6")} to="analytics">
            Analytics
          </Link>

          <Link style={linkStyle("#f59e0b")} to="settings">
            Settings
          </Link>
        </nav>

        {/* Content */}
        <div
          style={{
            backgroundColor: "#7990f4",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #1e293b",
            marginBottom: "25px",
          }}
        >
          <Outlet />
        </div>

        {/* Logout */}
        <Logout />
      </div>
    </div>
  );
};

// Reusable Link Style
const linkStyle = (color) => ({
  color,
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: "6px",
  border: `1px solid ${color}`,
});

export default DashboardLayout;
