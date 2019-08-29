import React, {useState, useEffect} from 'react';
import Destination from './destination.js';
import Transportation from './transportation.js';
import Rentals from './hotelsAndApt';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const LocationRouter = (props) => {

    const [distance, setDistance] = useState()
    const [movingOption, setMovingOptions] = useState({});
    const [movingTotal, setMovingTotal] = useState(0);
    const [rentals, setRentals] = useState({});
    const [hotelTotal, setHotelTotal] = useState(0);
    const [aptTotal, setAptTotal] = useState(0);

    const getLocationData = (childData) => setDistance(childData.distance);
    const getMovingData = (childData) => setMovingOptions(childData);
    const getRentalData = (childData) => setRentals(childData);


    // checks if object is empty
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    const getMovingTotal = () => {
        // if youser chose to ren a truck
        if (movingOption.truck) {
            setMovingTotal(((distance*3.279)/23.6) + (30 + distance*1.10));
        }
        else {
            setMovingTotal((distance*3.279)/23.6);
        }
        return movingTotal;
    }

    const getHotelTotal = () => {
        // if user decides to stay at a motel
        if (rentals.hotel === 'yes') {
            setHotelTotal(30 * 80)
        }else{
            setHotelTotal(0);
        }

        // apt size total
        switch (rentals.size) {
            case "0":
                setAptTotal(800*2);
                break;
            case "1":
                setAptTotal(1300*2);
                break;
            case "2":
                setAptTotal(2100 * 2);
                break;
            default:
            // code block
        }
        
        return movingTotal + hotelTotal + aptTotal;  
    }

    useEffect(()=>{
        console.log('updated distance: ', distance);
        console.log('update moving options: ', movingOption);
        if(isEmpty(movingOption) === false){
            console.log('total: ', getMovingTotal());
        }
        console.log(`relocation cost`, getHotelTotal());
        
    },[distance, movingOption, movingTotal, hotelTotal, aptTotal, rentals])

    return (
        <div>
            <Route exact path='/location' component={(props) => (<Destination {...props} onChange={getLocationData} />)}/>
            <Route exact path='/transportation' component={(props) => (<Transportation {...props} onChange={getMovingData} />)} />
            <Route exact path='/rentals' component={(props) => (<Rentals {...props} onChange={getRentalData} />)} />
        </div>
    )
}

export default LocationRouter;