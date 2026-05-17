const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  image: { type: String },
  desc: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
