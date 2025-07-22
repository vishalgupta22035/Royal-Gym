const mongoose = require('mongoose');
const PlanSchema = new mongoose.Schema({
  title: String,
  price: String,
  features: [String],
});
module.exports = mongoose.model('Plan', PlanSchema);
