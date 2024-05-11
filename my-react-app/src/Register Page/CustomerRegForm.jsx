import React from 'react';
import './register.css';  // Adjust the path if your CSS file is located elsewhere

function CustomerRegistrationForm() {
  return (
    <div className="container">
      <div className="title">Customer Registration</div>
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
              <span className="details">Address</span>
              <input type="text" placeholder="Enter your address" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your phone number" required />
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

export default CustomerRegistrationForm;
