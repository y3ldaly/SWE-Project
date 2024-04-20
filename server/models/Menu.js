const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true, required: true }, //changed
  ratings: [{
    stars: { type: Number, required: true },
    comment: { type: String }
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Menu', menuSchema);
