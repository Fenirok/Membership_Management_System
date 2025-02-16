import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/Login.css"; // Import the CSS file
import { FaUser, FaLock } from "react-icons/fa"; // Import icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">🔐 Member Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>

          <button type="submit" className="auth-button">LOGIN</button>
        </form>
        <p className="auth-text">
          Don't have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/register")}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;