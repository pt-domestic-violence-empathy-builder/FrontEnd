import React, { useEffect, useState } from 'react';
import {Router, Route, NavLink} from "react-router-dom";
import ExistingBalance from './exsitingBalance';
const HealthRouter = (props) => {

    const [totalHealthCost, getTotalHealthCost] = useState(0);

    return (
        <div>   
            <Route exact path='/health' component={(props) => (<ExistingBalance {...props} />) }/>
        </div>
    )
}

export default HealthRouter;