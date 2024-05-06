const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    required: true, 
    enum: ['chef', 'delivery', 'importer', 'manager', 'customer', 'surfer']
  },
  status: { type: String, default: 'active', enum: ['active', 'deactivated'] },
  warnings: { type: Number, default: 0 },
  compliments: { type: Number, default: 0 },
  complaints: { type: Number, default: 0 },
  salary: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  ordersCount: { type: Number, default: 0 },
  isVIP: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
