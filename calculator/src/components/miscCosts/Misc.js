import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';

import * as Yup from 'yup';

function MiscCosts(props){
    const{
        errors,
        touched,
        values,
        status,
        onChange,
        history
    }=props

    const [miscCost, setMiscCost]=useState([]);

    useEffect(()=>{
        if(status){
            setMiscCost([...miscCost,status]);
        }
        onChange(status);
    },[status])

    return(
        <div>
            <Form>
                <Field
                    type='text'
                    name='legalCosts'
                    placeholder='Any expected Legal Costs'
                    onChange={miscClickHandler}/>
                    
                <Field
                    type='text'
                    name='securityCosts'
                    placeholder='Any additional security measures'
                    onChange={miscClickHandler}/>
                <Field
                    type='text'
                    name='cellPhone'
                    placeholder='Cost of a new Phone and/or number'
                    onChange={miscClickHandler}/>

                <button>Calculate Miscellaneous Costs</button>
            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({legalCosts,securityCosts,cellPhone}) {

        return {
            legalCosts:legalCosts||'',
            securityCosts:securityCosts||'',
            cellPhone:cellPhone||''

        };
    }
})(MiscCosts)

export default formikHOC;