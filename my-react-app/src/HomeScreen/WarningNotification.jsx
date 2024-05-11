import React from 'react';
import './HomeScreen'; // Make sure to import your CSS file

const WarningNotification = () => {
  return (
    <div className="warning-container">
      <div className="warning-box">
        <span>You have 1 warning.</span>
      </div>
    </div>
  );
}

export default WarningNotification;
