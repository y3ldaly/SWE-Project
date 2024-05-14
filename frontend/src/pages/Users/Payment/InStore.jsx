import React from 'react';
import { getCart } from '../../../utils/cart';
import { usePlaceOrderMutation } from '../../../redux/apiServices/orderApi';
// import '../../../pages/Surfers/Register/register.css'

function ReservationForm() {
  const [placeOrder, { isLoading, error, data }] = usePlaceOrderMutation();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const cart = getCart();
    placeOrder({
      dishes: cart,
      order_type: 'dine-in',
    })
  }

  return (
    <div className="container">
      <div className="title">Reservation Form</div>
      <div className="content">
        <form onSubmit={handlePlaceOrder}>
          <div className='error-message'>{error ? error.data.message : null}</div>
          <div className='success-message'>{data ? data.message : null}</div>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Last name" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your phone number" required />
            </div>
            <div className="input-box">
              <span className="details">Date of Reservation</span>
              <input type="date" required />
            </div>
            <div className="input-box">
              <span className="details">Time of Reservation</span>
              <input type="time" required />
            </div>
            <div className="input-box">
              <span className="details">Number of Guests</span>
              <input type="number" placeholder="Enter number of people" required min="1" max="100" />
            </div>
            <div className="input-box">
              <span className="details">Special Requests/Notes</span>
              <textarea placeholder="Add any special requests or notes here" rows="4"></textarea>
            </div>
          </div>
          <div className="button">
            <input type="submit" value={isLoading ? "Loading..." : "Register"} disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
