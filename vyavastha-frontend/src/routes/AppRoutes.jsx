import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from "../pages/Landing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProtectedRoute from "./ProtectedRoute";

function EventHostDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Event Host Dashboard
      </h1>
    </div>
  );
}

function AuthorityDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Government Authority Dashboard
      </h1>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* =========================
            EVENT HOST ROUTES
        ========================= */}

        <Route
          path="/event-host"
          element={
            <ProtectedRoute allowedRoles={["EVENT_HOST"]}>
              <EventHostDashboard />
            </ProtectedRoute>
          }
        />


        {/* =========================
            AUTHORITY ROUTES
        ========================= */}

        <Route
          path="/authority"
          element={
            <ProtectedRoute allowedRoles={["AUTHORITY"]}>
              <AuthorityDashboard />
            </ProtectedRoute>
          }
        />


        {/* =========================
            ADMIN ROUTES
        ========================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />


        {/* =========================
            UNKNOWN ROUTES
        ========================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;