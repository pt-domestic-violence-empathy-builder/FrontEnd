import React from 'react';
import Destination from './destination.js';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";


const LocationRouter = (props) => {
    return(
        <Route exact path='/' component={Destination} />
    )
}


export default LocationRouter