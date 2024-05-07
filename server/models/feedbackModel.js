const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    toUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    relatedDish: { type: Schema.Types.ObjectId, ref: 'Menu' },  // Optional, for feedback related to specific dishes
    type: {
        type: String,
        required: true,
        enum: ['compliment', 'complaint']
    },
    subject: {
        type: String,
        required: true,
        enum: ['food', 'delivery', 'food quality', 'fraud']  // Broad categories to encompass all possible feedback scenarios
    },
    description: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ['open', 'resolved'],
        default: 'open'
    },
    resolution: { type: String, enum: ['warning', 'dismissal', 'bonus', 'demotion', 'none'], default: 'none' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
