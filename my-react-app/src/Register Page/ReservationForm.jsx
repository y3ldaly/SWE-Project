import React from 'react';
import './style.css';  // Ensure the path to your CSS file is correct
function ReservationForm() {
    return (
      <div className="container">
        <div className="title">Reservation Form</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-box">
                <span className="details">last</span>
                <input type="password" placeholder="Last name" required />
              </div>
              <div className="input-box">
                <span className="details">Phone number</span>
                <input type="text" placeholder="Enter Manager ID" required />
              </div>
              <div className="input-box">
                <span className="details">Location Address</span>
                <input type="text" placeholder="Enter location address" required />
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

  export default ReservationForm;
