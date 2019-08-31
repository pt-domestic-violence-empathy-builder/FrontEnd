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
        <div>
            <Form>
                <div className='miscCosts'>
                    <h4 className='miscHeader'>Miscellaneous Costs</h4>
                        <div className='miscForm'>
                <Field
                    type='text'
                    className='legalCosts'
                    name='legalCosts'
                    placeholder='$ Expected Legal Costs'
                />
                
                <Field
                    type='text'
                    className='securityCosts'
                    name='securityCosts'
                    placeholder='$ Security Measures'
                />
                <Field
                    type='text'
                    className='cellPhone'
                    name='cellPhone'
                    placeholder='$ New Phonenumber'
                />

                <button type='submit' className='submitBtn'>Calculate Miscellaneous Costs</button>
                </div>
                </div>
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