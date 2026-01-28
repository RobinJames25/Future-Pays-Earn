import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import this
import '../assets/css/Login.css';

const Login = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here (API calls, validation, etc.)
    
    console.log("Redirecting to dashboard...");
    
    // 3. Use navigate instead of window.location.href
    navigate('/dashboard'); 
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');`}
      </style>

      <div className="login-wrapper">
        <div className="container">
          <div className="card">
            <div className="logo">Future Pay Earns</div>
            <div className="subtitle">Login to your account</div>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="07XXXXXXXX" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <button className="btn" type="submit">Login</button>
            </form>

            <div className="links">
              <a href="#">Forgot password?</a>
              <a href="#">Create account</a>
            </div>

            <div className="footer">© 2026 Future Pay Earns</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;