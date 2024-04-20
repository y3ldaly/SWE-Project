const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true},
  role: { type: String, required: true },
  status: { type: String, default: 'active' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  registrationDate: { type: Date, default: Date.now },
  vipStatusDate: { type: Date },
  complimentsGiven: { type: Number, default: 0 },
  complaintsGiven: { type: Number, default: 0 },
  warnings: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);