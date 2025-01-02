import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirection
import "./Login.css";
import logo from "../../Assets/Logo/Via-Logo-004.png";

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form default submission

    // Simulate login logic
    const isValid = true; // Replace with actual validation logic (e.g., API call)

    if (isValid) {
      // Navigate to the OTP page upon successful validation
      navigate("/otp");
    } else {
      alert("Invalid login credentials"); // Show error message on invalid login
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src={logo} alt="Logo" />
      </div>
      <div className="login-content">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">ID</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
