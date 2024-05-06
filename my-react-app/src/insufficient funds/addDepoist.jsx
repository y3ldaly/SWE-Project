import React, { useState } from 'react';
import './AddDeposit.css';  // Make sure the CSS file path is correct

function AddDeposit() {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Amount to deposit:', amount);
        // Add further logic to process the deposit
    };

    return (
        <div className="add-deposit-container">
            <h2>Add Deposit</h2>
            <div className="balance-info">
                <div className="balance-item">You currently have: $20.00</div>
                <div className="balance-item">Your order: $29.99</div>
            </div>
            <form onSubmit={handleSubmit} className="deposit-form">
                <label htmlFor="amount">Enter amount to deposit:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="9.00"
                />
                <button type="submit">CONTINUE</button>
            </form>
        </div>
    );
}

export default AddDeposit;
