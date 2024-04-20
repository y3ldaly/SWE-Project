const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['chef', 'delivery', 'importer', 'manager', 'customer', 'VIP', 'surfer'] },
  status: { type: String, default: 'active' }, // active, suspended, etc.
  spendingTotal: { type: Number, default: 0 },
  orderCount: { type: Number, default: 0 },
  vipStatusDate: { type: Date },
  complimentsGiven: { type: Number, default: 0 },
  complaintsReceived: { type: Number, default: 0 },
  warnings: { type: Number, default: 0 },
  isVIP: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
