const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chefUsername: { type: String, required: true, unique: true },
    deliveryUsername: { type: String, unique: true },
    dishes: [{
        dish: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
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
