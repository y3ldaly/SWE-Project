import React from 'react';
import './PaymentPage.css';
import paymentTypes from '../../../assets/payment-types.png';
import { usePlaceOrderMutation } from '../../../redux/apiServices/orderApi';
import { getCart } from '../../../utils/cart';

function Pickup() {
    const [placeOrder, { isLoading, error, data }] = usePlaceOrderMutation();

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const cart = getCart();
        placeOrder({
            dishes: cart,
            order_type: 'pick-up',
        })
    }
    return (
        <div className="container">
            <h1 className="title">HIFRY HALAL</h1>
            <form onSubmit={handlePlaceOrder}>
                <div className='error-message'>{error ? error.data.message : null}</div>
                <div className='success-message'>{data ? data.message : null}</div>
                <div className="row">
                    <div className="col" id="col2">
                        <h3 className="title">Payment</h3>
                        <div className="inputBox">
                            <label htmlFor="name">Card Accepted:</label>
                            <img src={paymentTypes} alt="credit/debit card image" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="cardName">Name On Card:</label>
                            <input type="text" id="cardName" placeholder="Enter card name" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="cardNum">Credit Card Number:</label>
                            <input type="text" id="cardNum" placeholder="1111-2222-3333-4444" maxLength="19" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="expMonth">Exp Month:</label>
                            <select id="expMonth">
                                <option value="">Choose month</option>
                                {/* Dynamically generate month options */}
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <label htmlFor="expYear">Exp Year:</label>
                                <select id="expYear">
                                    <option value="">Choose Year</option>
                                    {/* Dynamically generate year options */}
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 2020} value={i + 2020}>{i + 2020}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="cvv">CVV:</label>
                                <input type="number" id="cvv" placeholder="123" required />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value={isLoading ? "Loading..." : "Proceed to Checkout"} className="submit_btn" disabled={isLoading} />
            </form>
        </div>
    );
}

export default Pickup;
