import React from 'react';
import './register.css';  // Adjust the path if your CSS file is located elsewhere
import { useRegisterMutation } from '../../redux/apiServices/userApi';

function CustomerRegistrationForm() {
  const [register, {isLoading, error}] = useRegisterMutation();

  const handleSubmit = (e) => {
    console.log("Clicked");
    e.preventDefault();
    const data = {
      username: e.target[0].value,
      password: e.target[1].value,
      address: e.target[2].value,
      phoneNumber: e.target[3].value,
    };
    register(data);
  };

  return (
    <div className="container">
      <div className="title">Customer Registration</div>
      <div className="content">
        <form>
          <div className="error-message">{error ? error.data.message : null}</div>
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
            <input type="button" value={isLoading ? "Loading": "Register"} disabled = {isLoading} onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerRegistrationForm;
