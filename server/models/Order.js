const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true, enum: ['pending', 'completed', 'cancelled', 'frozen'] },
  deliveryOption: { type: String, required: true, enum: ['in-store', 'pickup', 'delivery'] },
  timeScheduled: { type: Date }, // Optional, for scheduled orders
  feedback: [{
    chefFeedback: { type: String, default: '' }, // Feedback specific to the chef
    deliveryFeedback: { type: String, default: '' } // Feedback specific to the delivery personnel
  }]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
