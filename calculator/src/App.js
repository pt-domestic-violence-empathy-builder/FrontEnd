import React from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js'

function App() {
  return (
    <div className="App">
      <Location />
      <Health />
      
    </div>
  );
}

export default App;
