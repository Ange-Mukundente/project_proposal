const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new patient
router.post('/', async (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    medicalHistory: req.body.medicalHistory,
    appointmentDate: req.body.appointmentDate,
  });

  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single patient
router.get('/:id', getPatient, (req, res) => {
  res.json(res.patient);
});

// Update a patient
router.patch('/:id', getPatient, async (req, res) => {
  if (req.body.name != null) {
    res.patient.name = req.body.name;
  }
  if (req.body.age != null) {
    res.patient.age = req.body.age;
  }
  if (req.body.address != null) {
    res.patient.address = req.body.address;
  }
  if (req.body.medicalHistory != null) {
    res.patient.medicalHistory = req.body.medicalHistory;
  }
  if (req.body.appointmentDate != null) {
    res.patient.appointmentDate = req.body.appointmentDate;
  }

  try {
    const updatedPatient = await res.patient.save();
    res.json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a patient
router.delete('/:id', getPatient, async (req, res) => {
  try {
    await res.patient.remove();
    res.json({ message: 'Deleted Patient' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get patient by ID
async function getPatient(req, res, next) {
  let patient;
  try {
    patient = await Patient.findById(req.params.id);
    if (patient == null) {
      return res.status(404).json({ message: 'Cannot find patient' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.patient = patient;
  next();
}

module.exports = router;
