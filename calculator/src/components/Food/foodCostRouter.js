import React, {useState, useEffect}from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Route} from 'react-router-dom';
import FoodCosts from './FoodCosts.js';

const FoodRouter=()=>{
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
            console.log('total: ', calculateTotal());
        }
    },[foodBudget])

    
    return(
        <Route exact path='/food' component={(props) => (<FoodCosts {...props} onChange={getFoodCost} />)} />
    )
}

export default FoodRouter;