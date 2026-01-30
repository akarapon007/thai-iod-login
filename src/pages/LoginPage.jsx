import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-layout">
      <div className="login-left">
        <img src="/imageworkIn.png" alt="Work" />
      </div>
      <div className="login-right">
        <div className="login-wrapper">
          <div className="login-card">
            <img src="/logoworktest.png" height={80} alt="Thai IOD Logo" />
            <h2 className="login-title">Sign in</h2>
            <p>
              Using Thai IOD for work? We recommend signing in with your work email address.
            </p>
            <input placeholder="Email Address" type="email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <div className="register">
              Don't have an account? <a href="#">Register</a>
            </div>
          </div>
          <div className="policy">
            By continuing, you agree to our <br />
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}