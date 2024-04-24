const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['chef', 'delivery', 'importer', 'manager', 'customer', 'VIP', 'surfer'] },
  status: { type: String, default: 'active', enum: ['active', 'suspended', 'inactive'] }, // Manage user status
  address: { type: String, default: '' }, // For delivery purposes
  spendingTotal: { type: Number, default: 0 },
  orderCount: { type: Number, default: 0 },
  vipStatusDate: { type: Date }, // Tracks when a customer became a VIP
  complimentsGiven: { type: Number, default: 0 },
  complaintsReceived: { type: Number, default: 0 },
  warnings: { type: Number, default: 0 },
  isVIP: { type: Boolean, default: false }, // Automatically updated based on conditions
}, { timestamps: true });

// Pre-save middleware to hash passwords
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

// Method to check user password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
