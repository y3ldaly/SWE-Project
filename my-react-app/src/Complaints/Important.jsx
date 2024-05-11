import React from 'react';
import './Urgent.css'
import './urgentNav.css'
import Navbar from './urgentNavbar';
function AlertBox() {
  const handleDispute = () => {
    console.log('Dispute clicked');
    // Handle the dispute action here
  };

  const handleIgnore = () => {
    console.log('Ignore clicked');
    // Handle the ignore action here
  };

  return (
    <div>      
         <Navbar />

    <div className="alert-box">
      <div className="alert-header">
        <span className="alert-icon">⚠️</span>
        IMPORTANT
      </div>
      <div className="alert-body">
      You have received 1 warning(s)! If you receive a second, your account will be [deregistered/demoted to standard].

</div>
      <div className="alert-actions">
        <button onClick={handleDispute} className="button dispute">Ok GOT IT!</button>
      </div>
    </div>
    </div>
  );
}

export default AlertBox;
