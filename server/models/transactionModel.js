const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
        type: String,
        required: true,
        enum: ['deposit', 'withdrawal', 'payment']
    },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
