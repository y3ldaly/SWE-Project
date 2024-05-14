import React from 'react';
import './insufficient.css'
const WarningMessage = ({ message }) => {
    return (
      <div className="Not Enough">
        {message}
      </div>
    );
  };
  
  export default WarningMessage;