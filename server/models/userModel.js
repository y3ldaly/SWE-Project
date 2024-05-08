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
    enum: ['chef', 'delivery', 'importer', 'manager', 'customer', 'VIP']
  },
  status: { type: String, default: 'active', enum: ['active', 'deactivated'] },
  warnings: { type: Number, default: 0 },
  compliments: { type: Number, default: 0 },
  complaints: { type: Number, default: 0 },
  app_complaints: { type: Number, default: 0 },
  app_compliments: { type: Number, default: 0 },
  demotion_count: { type: Number, default: 0 },
  promotion_count: { type: Number, default: 0 },
  ratings: [{
    customerId: { type: Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number },
  }],
  hourlyRate: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  moneySpent: { type: Number, default: 0 },
  orderCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);