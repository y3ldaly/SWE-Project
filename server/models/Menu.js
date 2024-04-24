const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  description: { type: String, required: true },
  keywords: [{ type: String }], // For search functionality
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  image: { type: String }, // URL to an image of the dish
  ratings: [{
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, default: '' }
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
