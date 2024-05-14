import React, { useEffect, useState } from 'react';
import './register.css';  // Adjust the path if your CSS file is located elsewhere
import { useRegisterMutation } from '../../redux/apiServices/userApi';
import { useNavigate } from 'react-router-dom';

function ManagerRegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [register, { isLoading, error, data }] = useRegisterMutation();

  const handleSubmit = (e) => {
    console.log("Clicked");
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: 'manager'
    };
    register(data);
  };

  useEffect(() => {
    if (!isLoading && data) {
      localStorage.setItem('token', data.token);
      navigate('/');
    }
  }, [isLoading, data, navigate])

  return (
    <div className="container">
      <div className="title">Manager Registration</div>
      <div className="error-message">{error ? error.data.message : null}</div>
      <div className='success-message'>{data ? data.message : null}</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
          <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter your username" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter your username" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your username" required onChange={(e) => setEmail(e.target.value)} value={email} />
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
          <div className="my_button">
            <input type="button" value={isLoading ? "Loading" : "Register"} disabled={isLoading} onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerRegistrationForm;
