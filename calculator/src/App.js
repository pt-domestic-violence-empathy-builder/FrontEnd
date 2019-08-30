import React,{NavLink,useState, useEffect} from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';
import MiscCosts from './components/miscCosts/miscRouter.js'


function App() {

  const [locationCost, setLocationCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [miscCost, setMiscCost] = useState(0);
  const [healthCost, setHealthCost] = useState(0);
  const [budgetCost, setBudgetCost] = useState(0);

  const [sums, setSums] = useState(0);

  const getLocationCost = (childData) => setLocationCost(childData) ;
  const getFoodCost = (childData) => setFoodCost(childData);
  const getMiscCost = (childData) => setMiscCost(childData);
  const getHealthCost = (childData) => setHealthCost(childData);
  const getBudgetCost = (childData) => setBudgetCost(childData);

  const calculateDiff = ()=>{
    console.log('user Budget: ', budgetCost);
    console.log('user location cost: ', locationCost );
    console.log('user health cost: ', healthCost);
    console.log('user food cost: ', foodCost);
    console.log('user misc cost: ', miscCost);
    return budgetCost - (locationCost + healthCost + foodCost + miscCost)
  }

  useEffect(()=> {
    console.log('difference of budget and relocation costs: ' , calculateDiff());
  },[budgetCost,locationCost,healthCost,foodCost,miscCost])


  return (
    <div className="App">
      <div className='Navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/budget'>Budget</NavLink>
        <NavLink to='/location'>Location</NavLink>
        <NavLink to='/health'>Health</Navlink>
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
