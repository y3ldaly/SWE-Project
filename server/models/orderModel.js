const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: { type: Number, unique: true, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chefUsername: { type: String, required: true },
    deliveryUsername: { type: String },
    dishes: [{
        dishName: { type: String, required: true },  // Changed from dish ObjectId to dishName
        quantity: { type: Number, required: true, min: 1 }
    }],
    total_price: { type: Number, required: true },
    status: {
        type: String,
        required: true,
        enum: ['in_progress', 'completed', 'canceled', 'frozen'],
        default: 'in_progress'
    },
    order_type: {
        type: String,
        required: true,
        enum: ['dine-in', 'pick-up', 'delivery']
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
