const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  orderDate: { type: Date, default: Date.now },
  serviceType: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
