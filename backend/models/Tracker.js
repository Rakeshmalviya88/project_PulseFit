const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  weight: { type: Number, required: true },
  calories: { type: Number, required: true },
  waterIntake: { type: Number, required: true },
  sleepDuration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tracker', trackerSchema);

