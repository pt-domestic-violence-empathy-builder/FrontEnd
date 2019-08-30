import React, {useState, useEffect} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Route} from 'react-router-dom';
import MiscCosts from './Misc.js';

const MiscRouter=()=>{
    const [miscBudget, setMiscBudget]=useState({});
    const [miscTotalCost, setMiscTotalCost]=useState(0);

    function isEmpty(obj){
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
            return false;
        }
        return true;
    }

    function miscTotal(){
        return parseInt(miscBudget.legalCosts)+parseInt(miscBudget.securityCosts)+parseInt(miscBudget.cellPhone)
    }

    function getMiscCost(childData){
        return setMiscBudget(childData);
    }

    useEffect(()=>{
        if(isEmpty(miscBudget)===false){
            console.log('total:', miscTotal());
        }
    },[miscBudget])

    return (
        <Route exact path='/misc' component={(props)=>(<MiscCosts {...props} onChange={getMiscCost}/>)}/>
    )
}

export default MiscRouter;