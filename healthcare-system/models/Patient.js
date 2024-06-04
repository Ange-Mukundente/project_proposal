const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  address: String,
  medicalHistory: String,
  appointmentDate: Date,
});

module.exports = mongoose.model('Patient', patientSchema);
