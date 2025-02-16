import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/Register.css"; // Import the CSS file

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register To Services</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Your Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="auth-input"
          />
          <input
            type="email"
            placeholder="example@123.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          <button type="submit" className="auth-button">REGISTER</button>
        </form>
        <p className="auth-text">
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
