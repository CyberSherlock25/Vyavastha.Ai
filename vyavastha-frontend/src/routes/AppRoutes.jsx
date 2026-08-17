import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function Placeholder({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This page is under development.</p>
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
          element={<Placeholder title="Event Host Dashboard" />}
        />

        <Route
          path="/authority"
          element={<Placeholder title="Authority Dashboard" />}
        />

        <Route
          path="/admin"
          element={<Placeholder title="Admin Dashboard" />}
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