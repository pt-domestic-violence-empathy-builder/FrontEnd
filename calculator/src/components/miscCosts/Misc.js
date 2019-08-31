import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import Styled from 'styled-components';

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
        <div className='misc-container'>
            <Form className='misc-form'>
                < h4 className = 'miscHeader'> Miscellaneous Costs </h4>
                <Field
                    className='misc-input'
                    type='text'
                    name='legalCosts'
                    placeholder='$ Expected Legal Costs'
                />
                <Field
                    className='misc-input'
                    type='text'
                    name='securityCosts'
                    placeholder='$ Security Measures'
                />
                <Field
                    className='misc-input'
                    type='text'
                    name='cellPhone'
                    placeholder='$ New Phonenumber'
                />
                <button type='submit' className='submitBtn'>Calculate Miscellaneous Costs</button>
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