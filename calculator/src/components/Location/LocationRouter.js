import React, {useState, useEffect} from 'react';
import Destination from './destination.js';
import Transportation from './transportation.js';
import OptionHandler from './optionHandler';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const LocationRouter = (props) => {

    const [distance, setDistance] = useState()
    const [movingOption, SetMovingOptions] = useState({});

    const getLocationData = (childData) => {
        setDistance(childData.distance);
    }

    const getMovingData = (childData) => {
        SetMovingOptions(childData);
    }

    useEffect(()=>{
        console.log('updated distance: ', distance);
        console.log('update moving options: ', movingOption);
    },[distance, movingOption])

    return (
        <div>
            <Route exact path='/location' component={(props) => (<Destination {...props} onChange={getLocationData} />)}/>
            <Route exact path='/transportation' component={(props) => (<Transportation {...props} onChange={getMovingData} />)}></Route>
            <Route exact path='/transportation/options' component={(props) => (<OptionHandler {...props} transitData={movingOption} />)} /> 
        </div>
    )
}

export default LocationRouter