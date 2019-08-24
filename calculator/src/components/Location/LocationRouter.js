import React from 'react';
import Destination from './destination.js';
import Transportation from './transportation.js'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const LocationRouter = (props) => {
    return (
        <div>
            <Route exact path='/location' component={Destination}/>
            <Route exact path='/Transportation' component={Transportation}></Route>
        </div>
    )
}

export default LocationRouter