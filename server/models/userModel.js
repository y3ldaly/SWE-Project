const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    required: true, 
    enum: ['chef', 'delivery', 'importer', 'manager', 'customer', 'surfer']
  },
  status: { type: String, default: 'active', enum: ['active', 'deactivated'] },
  warnings: { type: Number, default: 0 },
  spending: { type: Number, default: 0 },
  ordersCount: { type: Number, default: 0 },
  isVIP: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
