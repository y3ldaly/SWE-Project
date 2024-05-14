import { useEffect, useState } from 'react';
import { useRegisterMutation } from '../../redux/apiServices/userApi';
import './deliverymenreg.css'
import { useNavigate } from 'react-router-dom';
const DeliveryMenRegistration = () => {
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
      role: 'delivery'
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
    <div className="page deliveryman__registration__page">
      <h1>HIFRY HALAL</h1>
      <div className="container">
        <button className="btn">
          Deliveryman
        </button>
        <form>
          <div className="error-message">{error ? error.data.message : null}</div>
          <div className="form__control">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)} value={username} />
          </div>
          <div className="form__control">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="form__control">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className="form__control">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div className="form__control">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
          <div className="form__control">
            <label>Delivery ID</label>
            <input type="text" placeholder='Enter your delivery ID' />
          </div>

          <div className="form__control">
            <label>Mode of Delivery</label>
            <input type="text" placeholder='Enter your mode of delivery' />
          </div>

          <div className="form__control">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
          </div>
          <div className="my_button">
            <input type="button" value={isLoading ? "Loading" : "Register"} disabled={isLoading} onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryMenRegistration;
