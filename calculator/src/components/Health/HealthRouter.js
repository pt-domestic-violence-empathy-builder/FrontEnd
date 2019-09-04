import React, { useEffect, useState } from 'react';
import {Router, Route, NavLink} from "react-router-dom";
import ExistingBalance from './exsitingBalance';
const HealthRouter = (props) => {

    const [userInput, setUserInput] = useState({})
    const [totalHealthCost, setTotalHealthCost] = useState(0);
    
    const getExistingBalance = (childData) => setUserInput(childData)

    const balanceSum = () =>{
        let sum = 0;
    
        if(userInput.currentHealthBills === 'yes'){
            setTotalHealthCost(parseInt(userInput.medicalBill));
        }

        if(userInput.buyingInsurance === 'yes'){
            sum = 440 //440 is the avg health cost in America
        }

        sum += parseInt(totalHealthCost)  
        return sum;
    }

    useEffect(()=>{
        let hCost = balanceSum()
        // console.log('total health cost: ', hCost);
        props.onChange(parseInt(hCost));

    },[userInput,totalHealthCost])

    return (   
            <Route exact path='/health' component={(props) => (<ExistingBalance {...props} onChange={getExistingBalance} />) }/>
    )
}

export default HealthRouter;