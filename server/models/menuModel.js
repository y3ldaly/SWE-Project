const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  chefId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dishName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  keywords: [{ type: String }],
  imageUrl: { type: String, required: true },
  ratings: [{
    customerId: { type: Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, required: true },
    comment: { type: String }
  }],
  averageRating: { type: Number, default: 0 }
});

menuSchema.methods.updateAverageRating = function() {
  let sum = 0;
  this.ratings.forEach(rating => sum += rating.score);
  this.averageRating = this.ratings.length ? (sum / this.ratings.length) : 0;
  return this.save();
};

module.exports = mongoose.model('Menu', menuSchema);
