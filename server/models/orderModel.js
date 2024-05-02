const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dishes: [{
        dish: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
        quantity: { type: Number, required: true, min: 1 }
    }],
    total_price: { type: Number, required: true },
    status: {
        type: String,
        required: true,
        enum: ['new', 'in_progress', 'completed', 'frozen'],
        default: 'new'
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
