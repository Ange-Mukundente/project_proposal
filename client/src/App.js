import React from 'react';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <div>
      <AddPatient />
      <PatientList />
    </div>
  );
}

export default App;
