const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  time: { type: String, required: true },
  class: { type: String, required: true },
  trainer: { type: String, required: true },
  type: { type: String, default: 'Intense' }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);
