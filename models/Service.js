const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  iconName: { type: String, default: 'Dumbbell' },
  title: { type: String, required: true },
  desc: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
