import React from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';

// import MiscCat from './Misc.js';
// import NavBar from './NavBar.js';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <FoodRouter/>
      {/* <MiscCat/> */}
      <Location />
      <Health />
      <Budget />

    </div>
  );
}

export default App;
