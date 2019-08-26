import React from 'react';
import Destination from './destination.js';
import Transportation from './transportation.js';
import OptionHandler from './optionHandler';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const LocationRouter = (props) => {
    return (
        <div>
            <Route exact path='/location' component={Destination}/>
            <Route exact path='/transportation' component={Transportation}></Route>
            <Route exact path='/transportation/options' component={OptionHandler} /> 
        </div>
    )
}

export default LocationRouter