import './PaymentPage.css';
import paymentTypes from '../../../assets/payment-types.png';
import { usePlaceOrderMutation } from '../../../redux/apiServices/orderApi';
import { getCart } from '../../../utils/cart';
// import { Link } from 'react-router-dom';


function Delivery() {
    const [placeOrder, { isLoading, error, data }] = usePlaceOrderMutation();

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const cart = getCart();
        placeOrder({
            dishes: cart,
            order_type: 'delivery',
        })
    }

    return (
        <>
            <h1 className="title">HIFRY HALAL</h1>
            <div className="container">
                <form onSubmit={handlePlaceOrder}>
                    <div className='error-message'>{error ? error.data.message : null}</div>
                    <div className='success-message'>{data ? data.message : null}</div>
                    <div className="row">
                        <div className="col">
                            <h3 className="title">Billing Address</h3>
                            <div className="inputBox">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" id="name" placeholder="Enter your full name" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" placeholder="Enter email address" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" placeholder="Enter address" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city" placeholder="Enter city" required />
                            </div>
                            <div className="flex">
                                <div className="inputBox">
                                    <label htmlFor="state">State:</label>
                                    <input type="text" id="state" placeholder="Enter state" required />
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="zip">Zip Code:</label>
                                    <input type="number" id="zip" placeholder="123 456" required />
                                </div>
                            </div>
                        </div>
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
                                <label htmlFor="">Exp Month:</label>
                                <select name="" id="">
                                    <option value="">Choose month</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="inputBox">
                                    <label htmlFor="">Exp Year:</label>
                                    <select name="" id="">
                                        <option value="">Choose Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="number" id="cvv" placeholder="1234" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value={isLoading ? "Loading..." : "Proceed to Checkout"} className="submit_btn" disabled={isLoading} />
                    {/* write a function that compares card $ to order price, redirect
                    to insufficient page if not enough */}
                </form>
            </div>
        </>
    );
}

export default Delivery;
