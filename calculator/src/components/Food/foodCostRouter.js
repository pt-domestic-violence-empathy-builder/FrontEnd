import React, {useState, useEffect}from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import FoodCosts from './FoodCosts.js';

const FoodRouter=(props)=>{
    const [foodBudget, setFoodBudget]=useState({});
    const [totalCost,setTotalCost]=useState(0);

    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    function calculateTotal(){
        // let Sum=0
        // if(foodBudget.FeedCost){
        //      Sum=parseInt(foodBudget.FeedCost)+parseInt(foodBudget.monthlyFoodCost)*parseInt(foodBudget.numberOfPeople)
        // }
       return (parseInt(foodBudget.FeedCost)+parseInt(foodBudget.monthlyFoodCost))*parseInt(foodBudget.numberOfPeople)
    }

    function getFoodCost(childData){
        return setFoodBudget(childData);
    }

    useEffect(()=>{
        if(isEmpty(foodBudget) === false){
            let total = calculateTotal()
            props.onChange(parseInt(total));
        }
    },[foodBudget])

    
    return(
        <Route exact path='/food' component={(props) => (<FoodCosts {...props} onChange={getFoodCost} />)} />
    )
}

export default FoodRouter;