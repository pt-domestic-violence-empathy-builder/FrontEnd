import React, {useEffect, useState} from 'react';
import {Router, Route, NavLink} from "react-router-dom"
import UserBudget from './userBudget';

const BudgetRouter = (props) => {
    const [totalBudget, setTotalBudget] = useState(0);

    const getBudget = (childData) => setTotalBudget(childData);

    useEffect(()=>{
        console.log('User budget:', totalBudget.budget);
        props.onChange(parseInt(totalBudget.budget))
    }, [totalBudget])

    return(
    <Route exact path='/' component={(props) => (<UserBudget {...props} onChange={getBudget} />)} />
    )
}

export default BudgetRouter;