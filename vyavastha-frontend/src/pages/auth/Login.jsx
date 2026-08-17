import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Vyavastha.ai</h1>
          <p>Smart Event Permission Management</p>
        </div>

        <div className="auth-content">
          <h2>Welcome back</h2>
          <p className="auth-subtitle">
            Login to manage your event permissions
          </p>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;