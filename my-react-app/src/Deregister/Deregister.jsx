import React from 'react';
import './Deregister.css'
function Deregister() {
  const handleDeregister = () => {
    // Logic to handle deregistration
    console.log("Deregistering...");
    // Redirect to another URL
    window.location.href = '/deregister-success'; // Change to your desired URL
  };

  const handleCancel = () => {
    // Logic to handle cancellation
    console.log("Cancellation...");
    // Go to the home page or any specific route
    window.location.href = '/';
  };

  return (
    <div className="deregister-container">
      <h1>Deregister</h1>
      <p>Enter your password and click “DEREGISTER” to deregister your account. When you deregister, the manager will clear your funds and close your account.</p>
      <input type="password" placeholder="Password" />
      <button onClick={handleDeregister} className="button red">DEREGISTER</button>
      <button onClick={handleCancel} className="button yellow">CANCEL</button>
    </div>
  );
}

export default Deregister;
