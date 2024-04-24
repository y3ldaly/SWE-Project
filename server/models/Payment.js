const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true, enum: ['credit_card', 'debit_card', 'paypal', 'cash', 'other'] }, // Payment methods
  status: { type: String, required: true, enum: ['pending', 'completed', 'failed', 'refunded'] }, // Payment status
  transactionId: { type: String, required: true, unique: true }, // A unique identifier for the transaction
  paymentDate: { type: Date, default: Date.now } // The date and time the payment was processed
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
