import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";

const Login = lazy(() => import("./pages/login"));
const Logs = lazy(() => import("./pages/Logs"));
const DashboardLayout = lazy(() => import("./pages/DashboardLayout"));
const DashboardSummary = lazy(() => import("./pages/DashboardSummary"));
const DashboardSettings = lazy(() => import("./pages/DashboardSettings"));
const DashboardAnalytics = lazy(() => import("./pages/DashboardAnalyts"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardSummary />} />
            <Route path="summary" element={<DashboardSummary />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>

          <Route
            path="/logs"
            element={
              <ProtectedRoute>
                <Logs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
