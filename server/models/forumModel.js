const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    username: { type: String, required: true },
    postedAt: { type: Date, default: Date.now },
    type: {
        type: String,
        enum: ['post', 'reply'],
        required: true
    },
    comment: { type: String, required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Forum' }] // Array of ObjectId referencing Forum for replies
});

module.exports = mongoose.model('Forum', forumSchema);
