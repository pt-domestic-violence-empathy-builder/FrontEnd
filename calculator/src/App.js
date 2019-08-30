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
import {Nav, FormContainer, Home, RightView} from './components/styles.js';
import Axios from 'axios';
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

    const [serverReady,
        setServerReady] = useState(false);

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

        // check if backend is ready
        Axios.get('https://pt-dv-empathy-builder.herokuapp.com/')
        .then(res => {
            console.log('Is server ready: ', res.data.message)
            setServerReady(true)
        })
        .catch(err => {
            console.log('err: ',err)
        })

        if (budgetCost !== 0 && 
            locationCost !== 0 &&
             healthCost !== 0 &&
              foodCost !== 0 &&
               miscCost !== 0){
                console.log(serverReady)
               }

        return budgetCost - (locationCost + healthCost + foodCost + miscCost)
    }

    useEffect(() => {
        console.log('difference of budget and relocation costs: ', calculateDiff());

    }, [budgetCost, locationCost, healthCost, foodCost, miscCost])


    return (
        <div className="App">
            <Home>
            <FormContainer>
                <Nav>
                    <NavLink to='/budget'>
                        <Button content='budget' size='small' color='teal'/>
                    </NavLink>
                    <NavLink to='/location'>
                        <Button content='Location' size='small' color='purple'/>
                    </NavLink>
                    <NavLink to='/health'>
                        <Button content='Health' size='small' color='red'/>
                    </NavLink>
                    <NavLink to='/food'>
                        <Button content='Food' size='small' color='blue'/>
                    </NavLink>

                    <NavLink to='/misc'>
                        <Button content='Misc' size='medium' color='green'/>
                    </NavLink>
                </Nav>

                <FoodRouter onChange={getFoodCost}/>
                <MiscCosts onChange={getMiscCost}/>
                <Location onChange={getLocationCost}/>
                <Health onChange={getHealthCost}/>
                <Budget onChange={getBudgetCost}/>
            </FormContainer>

            <div className='rightView'>
                <h1>Start Planning.</h1>
            </div>

            </Home> 
        </div>

    );
}

export default App;
