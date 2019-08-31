import React, {useState, useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js';
import Budget from './components/Budget/budgetRouter.js';
import FoodRouter from './components/Food/foodCostRouter.js';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Nav, FormContainer, Home, RightView} from './components/styles.js';
import MiscCosts from './components/miscCosts/miscRouter.js'
import Submitted from './components/Completed/submitted.js'
import Axios from 'axios';

const Views = ({
    budgetCost,
    locationCost,
    healthCost,
    foodCost,
    miscCost,
    difference
}) => {


    if (budgetCost !== null && locationCost !== null && healthCost !== null && foodCost !== null && miscCost !== null) {
        return (
            <h4>Remaining Balance: {difference}</h4>
        )
    } else {
        return <h1>Start Planning.</h1>
    }
}

function App() {

    const [locationCost,
        setLocationCost] = useState(null);
    const [foodCost,
        setFoodCost] = useState(null);
    const [miscCost,
        setMiscCost] = useState(null);
    const [healthCost,
        setHealthCost] = useState(null);
    const [budgetCost,
        setBudgetCost] = useState(null);
    const [difference,
        setDifference] = useState(null)

    const [serverReady,
        setServerReady] = useState(false);

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
            else{
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
                        <NavLink to='/'>
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
                            <Button content='Misc' size='small' color='green'/>
                        </NavLink>
                    </Nav>

                    <FoodRouter onChange={getFoodCost}/>
                    <MiscCosts onChange={getMiscCost}/>
                    <Location onChange={getLocationCost}/>
                    <Health onChange={getHealthCost}/>
                    <Budget onChange={getBudgetCost}/>
                    <Route excact path='/completed' component={(props) => (<Submitted {...props} isSubmitted={difference} />)} />
                </FormContainer>

                <div className='rightView'>
                    <Views
                        budgetCost={budgetCost}
                        locationCost={locationCost}
                        miscCost={miscCost}
                        healthCost={healthCost}
                        foodCost={foodCost}
                        difference={difference}/>
                </div>

            </Home>
        </div>

    );
}

export default App;
