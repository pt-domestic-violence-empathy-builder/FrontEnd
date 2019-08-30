import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';
import MiscCosts from './components/miscCosts/miscRouter.js';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Styled from 'styled-components'

function App() {

    const [locationCost,
        setLocationCost] = useState(0);
    const [foodCost,
        setFoodCost] = useState(0);
    const [miscCost,
        setMiscCost] = useState(0);
    const [healthCost,
        setHealthCost] = useState(0);
    const [budgetCost,
        setBudgetCost] = useState(0);

    const [sums,
        setSums] = useState(0);

    const getLocationCost = (childData) => setLocationCost(childData);
    const getFoodCost = (childData) => setFoodCost(childData);
    const getMiscCost = (childData) => setMiscCost(childData);
    const getHealthCost = (childData) => setHealthCost(childData);
    const getBudgetCost = (childData) => setBudgetCost(childData);

    const calculateDiff = () => {
        console.log('user Budget: ', budgetCost);
        console.log('user location cost: ', locationCost);
        console.log('user health cost: ', healthCost);
        console.log('user food cost: ', foodCost);
        console.log('user misc cost: ', miscCost);
        return budgetCost - (locationCost + healthCost + foodCost + miscCost)
    }

    useEffect(() => {
        console.log('difference of budget and relocation costs: ', calculateDiff());

    }, [budgetCost, locationCost, healthCost, foodCost, miscCost])

    const Nav = Styled.nav `
  display:flex;
  flex-flow: row wrap;
  align-items:center;
`
    const FormContainer = Styled.div `
  display:flex;
  flex-flow: column;
  align-items: center;
  margin:20px auto;
`
    return (
        <div className="App">
            <FormContainer>
                <Nav>
                    <NavLink to='/budget'>
                        <Button content='budget' size='large' color='teal'/>
                    </NavLink>
                    <NavLink to='/location'>
                        <Button content='Location' size='large' color='purple'/>
                    </NavLink>
                    <NavLink to='/health'>
                        <Button content='Health' size='large' color='red'/>
                    </NavLink>
                    <NavLink to='/food'>
                        <Button content='Food' size='large' color='blue'/>
                    </NavLink>

                    <NavLink to='/misc'>
                        <Button content='Misc' size='large' color='green'/>
                    </NavLink>
                </Nav>

                <FoodRouter onChange={getFoodCost}/>
                <MiscCosts onChange={getMiscCost}/>
                <Location onChange={getLocationCost}/>
                <Health onChange={getHealthCost}/>
                <Budget onChange={getBudgetCost}/>
            </FormContainer>

        </div>
    );
}

export default App;
