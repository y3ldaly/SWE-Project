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
        URGENT
      </div>
      <div className="alert-body">
        You have received complaint(s)! Would you like to dispute them?
      </div>
      <div className="alert-actions">
        <button onClick={handleDispute} className="button dispute">Dispute! (Recommended)</button>
        <button onClick={handleIgnore} className="button ignore">No thanks!</button>
      </div>
    </div>
    </div>
  );
}

export default AlertBox;
