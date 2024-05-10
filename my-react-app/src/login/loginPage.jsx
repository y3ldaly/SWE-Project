import React, { useState } from 'react';
import './loginPage.css';  // Assuming your CSS file is named style.css


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add login logic or API call here
  }

  return (
    <div className="wrapper">
      <div className="title">
        Login Form
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          Not a member? <a href="#">Signup now</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
