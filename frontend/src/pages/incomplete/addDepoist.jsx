import React, { useState } from 'react';
import './AddDeposit.css';  // Make sure the CSS file path is correct
import WarningMessage from './WarningNotEnough'
import { useMakeDepositMutation } from '../../redux/apiServices/orderApi';
import { useGetUserDetailsQuery } from '../../redux/apiServices/userApi';
import { getCart } from '../../utils/cart';

function AddDeposit() {

    const [amount, setAmount] = useState('');
    const [warning, setWarning] = useState(false);
    const cart = getCart();
    console.log(cart);
    const total = cart.reduce((acc, item) => acc + item.price, 0);


    const { isLoading: loadingUser, data: userData } = useGetUserDetailsQuery();
    const [deposit, { isLoading, error, data }] = useMakeDepositMutation();
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Amount to deposit:', amount);
        deposit({ amount })
    };

    return (

        <div className="add-deposit-container">

            <h2>Add Deposit</h2>
            {error && <div className="error">{error?.data?.message}</div>}
            {data && <div className="success">{data.message}</div>}
            {
                loadingUser ? <div>Loading...</div> : <>
                    <div className="balance-info">
                        <div className="balance-item">You currently have: ${userData?.userDetails?.balance}</div>
                        <div className="balance-item">Your order: ${total}</div>
                    </div>
                    {/* <WarningMessage message=" Not Enough Money" /> */}
                </>
            }


            <form onSubmit={handleSubmit} className="deposit-form">
                <label htmlFor="amount">Enter amount to deposit:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="9.00"
                />
                <button type="submit">{
                    isLoading ? "LOADING" :
                        "CONTINUE"
                }</button>
            </form>
        </div>
    );
}

export default AddDeposit;
