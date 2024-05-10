import React from 'react';
import './ConfirmButton.css';

function ConfirmButton({ onClick }) {
  return (
    <div className='confirm-button-container'>
        <button className="confirm-button" onClick={onClick}>
        CONFIRM
        </button>
    </div>
  );
}

export default ConfirmButton;
