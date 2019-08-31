import React,{NavLink} from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';
import MiscCosts from './components/MiscCosts/miscRouter.js';


function App() {
  return (
    <div className="App">
      <div className='Navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/budget'>Budget</NavLink>
        <NavLink to='/location'>Location</NavLink>
        <NavLink to='/health'>Health</NavLink>
        <NavLink to='/food'>Food</NavLink>
        <NavLink to='/misc'>Miscellaneous</NavLink>
      </div>
      <FoodRouter/>
      <MiscCosts />
      <Location />
      <Health />
      <Budget />

    </div>
  );
}

export default App;
