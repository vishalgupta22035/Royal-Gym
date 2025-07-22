const mongoose = require('mongoose');

const JoinRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  goal: { type: String, required: true },
  plan: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JoinRequest', JoinRequestSchema);
