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
import AdminEvents from "../pages/Admin/AdminEvents";

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

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Event Host */}
        <Route
          path="/event-host"
          element={
            <ProtectedRoute allowedRoles={["EVENT_HOST"]}>
              <Placeholder title="Event Host Dashboard" />
            </ProtectedRoute>
          }
        />

        {/* Authority */}
        <Route
          path="/authority"
          element={
            <ProtectedRoute allowedRoles={["AUTHORITY"]}>
              <Placeholder title="Authority Dashboard" />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Placeholder title="Admin Dashboard" />
            </ProtectedRoute>
          }
        />

        {/* Admin Events */}
        <Route
          path="/admin/events"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminEvents />
            </ProtectedRoute>
          }
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;