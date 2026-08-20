import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const {
    user,
    isAuthenticated,
    loading,
  } = useAuth();

  /*
   * The application is still checking
   * the server-side session.
   *
   * Do NOT redirect yet.
   */
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  /*
   * Session check is complete and
   * there is no authenticated user.
   */
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  /*
   * User is authenticated but does not
   * have permission for this route.
   */
  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/login" replace />;
  }

  /*
   * User is authenticated and has
   * the required role.
   */
  return children;
}

export default ProtectedRoute;