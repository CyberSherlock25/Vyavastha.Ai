import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../context/AuthContext";

function Placeholder({ title }) {
  const { logout } = useAuth();

  return (
    <div>
      <h1>{title}</h1>

      <p>This page is under development.</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/event-host"
          element={
            <ProtectedRoute allowedRoles={["EVENT_HOST"]}>
              <Placeholder title="Event Host Dashboard" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/authority"
          element={
            <ProtectedRoute allowedRoles={["AUTHORITY"]}>
              <Placeholder title="Authority Dashboard" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Placeholder title="Admin Dashboard" />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;