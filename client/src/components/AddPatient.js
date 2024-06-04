import React, { useState } from 'react';
import axios from 'axios';

function AddPatient() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = { name, age, address, medicalHistory, appointmentDate };

    try {
      await axios.post('http://localhost:5000/patients', newPatient);
      setName('');
      setAge('');
      setAddress('');
      setMedicalHistory('');
      setAppointmentDate('');
    } catch (error) {
      console.error('There was an error adding the patient!', error);
    }
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>Medical History:
          <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
        </label>
        <label>Appointment Date:
          <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
        </label>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
