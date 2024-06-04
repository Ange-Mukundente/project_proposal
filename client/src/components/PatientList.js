import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
