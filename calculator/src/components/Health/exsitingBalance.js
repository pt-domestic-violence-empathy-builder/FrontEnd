import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Radio} from 'react-formik-ui';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const Health = (props) => {
    const {touched, values, errors, status} = props;
    const [existingAcc,
        setExistingAcc] = useState([]);

    useEffect(() => {
        if (status) {
            setExistingAcc([
                ...existingAcc,
                status
            ]);
            console.log(status);
            // props.history.push('/rentals')
        }

    }, [status])

    return (
        <div className='health-container'>
            <Form className='health-form'>
                <h4>Do you have any existing medical insurace?</h4>
                <Radio 
                    name='currentHealthBills'
                    options={[
                    {
                        value: 'yes',
                        label: 'Yes'
                    }, {
                        value: 'no',
                        label: 'No'
                    }
                ]}/>
                <h4>
                    If so, how much do you pay per month?
                </h4>
                <Field
                    type='text'
                    className='current-health-balance'
                    name='medicalBill'
                    placeholder='$'/>
                    <button>Submit</button>
            </Form>
        </div>
    )
}
const formikHOC = withFormik({
    mapToPropsValues({currentHealthBills, medicalBill}) {
        return {
            currentHealthBills: currentHealthBills || '',
            medicalBill: medicalBill || ''
        };
    },
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handleSubmit: health: ', values);
        setStatus(values);
        resetForm();
    }
})(Health);

export default formikHOC;