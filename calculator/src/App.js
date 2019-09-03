import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Nav, FormContainer, Home } from './components/styles.js';
import MiscCosts from './components/miscCosts/miscRouter.js'
import Submitted from './components/Completed/submitted.js'
import RightView from './components/Views/rightView.js'
import Axios from 'axios';



function App(props) {

    const [locationCost, setLocationCost] = useState(null);
    const [foodCost, setFoodCost] = useState(null);
    const [miscCost, setMiscCost] = useState(null);
    const [healthCost, setHealthCost] = useState(null);
    const [budgetCost, setBudgetCost] = useState(null);
    const [difference, setDifference] = useState(null)
    const [serverReady, setServerReady] = useState(false);
    const [rightViewColor, setRightViewColor] = useState(null)

    const getLocationCost = (childData) => setLocationCost(childData);
    const getFoodCost = (childData) => setFoodCost(childData);
    const getMiscCost = (childData) => setMiscCost(childData);
    const getHealthCost = (childData) => setHealthCost(childData);
    const getBudgetCost = (childData) => setBudgetCost(childData);

    const calculateDiff = () => {
        // console.log('user Budget: ', budgetCost);
        // console.log('user location cost: ', locationCost);
        // console.log('user health cost: ', healthCost);
        // console.log('user food cost: ', foodCost);
        // console.log('user misc cost: ', miscCost);
        setDifference(budgetCost - (locationCost + healthCost + foodCost + miscCost))

        // check if backend is ready
        Axios
            .get('https://pt-dv-empathy-builder.herokuapp.com/')
            .then(res => {
                // console.log('Is server ready: ', res.data.message)
                setServerReady(true)
            })
            .catch(err => {
                console.log('err: ', err)
            })

        // check inputs before posting
        if (budgetCost !== null &&
            locationCost !== null &&
            healthCost !== null &&
            foodCost !== null &&
            miscCost !== null &&
            serverReady === true) {
            Axios
                .post('https://pt-dv-empathy-builder.herokuapp.com/api/insert', {
                    budget_cost: budgetCost,
                    location_cost: locationCost,
                    health_cost: healthCost,
                    food_cost: foodCost,
                    misc_cost: miscCost,
                    difference: difference
                })
                .then((res) => {
                    console.log('update success', res);
                    setDifference(budgetCost - (locationCost + healthCost + foodCost + miscCost))
                })
                .catch((err) => {
                    // console.log('update failed: ', err);
                })
        }
        else {
            console.log('update failed');
        }

        return difference;
    }

    useEffect(() => {
        console.log('difference of budget and relocation costs: ', calculateDiff());

    }, [
            budgetCost,
            locationCost,
            healthCost,
            foodCost,
            miscCost,
            difference
        ])

    return (
        <div className="App">
            <Home>
                <FormContainer>
                    <Nav>
                        <Button as={NavLink} to='/' content='budget' size='small' color='teal' onClick={() => setRightViewColor('teal')}/>
                        <Button as={NavLink} to='/location' content='Location' size='small' color='purple' onClick={() => setRightViewColor('purple')} />
                        <Button as={NavLink} to='/health' content='Health' size='small' color='red' onClick={() => setRightViewColor('red')}  />
                        <Button as={NavLink} to='/food' content='Food' size='small' color='blue' onClick={() => setRightViewColor('blue')}  />
                        <Button as={NavLink} to='/misc' content='Misc' size='small' color='green' onClick={() => setRightViewColor('green')}  />
                    </Nav>
                    <FoodRouter onChange={getFoodCost} />
                    <MiscCosts onChange={getMiscCost} />
                    <Location onChange={getLocationCost} />
                    <Health onChange={getHealthCost} />
                    <Budget onChange={getBudgetCost} />
                    <Route excact path='/completed' component={(props) => (<Submitted {...props} isSubmitted={difference} />)} />
                </FormContainer>

                <RightView budgetCost={budgetCost}
                    locationCost={locationCost}
                    miscCost={miscCost}
                    healthCost={healthCost}
                    foodCost={foodCost}
                    difference={difference} />

            </Home>
        </div>

    );
}

export default App;
