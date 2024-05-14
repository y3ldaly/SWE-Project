import image from "../assets/payment-types.png";
//import Header from "../components/Header";
const PaymentDetailsPage = () => {
  return (
    <div className="page payment__details__page">
      <div className="container">
        <div className="card">
          <h2>Payment Details</h2>
          <div className="paymentOptions">
            <p>Card Accepted : </p>
            <img src={image} alt="payment methods" />
          </div>
          <div className="form-control">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-control">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div className="form-control">
            <label>Shipping Address</label>
            <input type="text" placeholder="Enter your shipping address" />
          </div>
          <div className="form-control">
            <label>Credit Card Number</label>
            <input type="text" placeholder="Enter your credit card number" />
          </div>
          <div className="form-group">
            <div className="form-control">
              <label>Expiry Date</label>
              <input type="text" placeholder="Enter expiry date" />
            </div>
            <div className="form-control">
              <label>CVV</label>
              <input type="text" placeholder="Enter cvv" />
            </div>
          </div>
          <button className="btn-primary">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
