import React from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js'
import Budget from './components/Budget/budgetRouter.js'

function App() {
  return (
    <div className="App">
      <Location />
      <Health />
      <Budget />
    </div>
  );
}

export default App;
