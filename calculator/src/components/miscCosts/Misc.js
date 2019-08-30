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
                    />
                    
                <Field
                    type='text'
                    name='securityCosts'
                    placeholder='Any additional security measures'
                    />
                <Field
                    type='text'
                    name='cellPhone'
                    placeholder='Cost of a new Phone and/or number'
                    />

                <button type='submit'>Calculate Miscellaneous Costs</button>
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
    },

    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handle submit: budget:', values);
        setStatus(values);
    }
})(MiscCosts)

export default formikHOC;