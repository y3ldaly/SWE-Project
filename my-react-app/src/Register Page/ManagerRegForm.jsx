import React from 'react';
import './style.css';  

function ManagerRegistrationForm() {
  return (
    <div className="container">
      <div className="title">Manager Registration</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <div className="input-box">
              <span className="details">Manager ID</span>
              <input type="text" placeholder="Enter Manager ID" required />
            </div>
            <div className="input-box">
              <span className="details">Location Address</span>
              <input type="text" placeholder="Enter location address" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerRegistrationForm;
