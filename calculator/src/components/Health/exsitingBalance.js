import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Radio} from 'react-formik-ui';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const Health = (props) => {
    const {touched, values, errors, status, onChange} = props;
    const [existingAcc,
        setExistingAcc] = useState([]);

    useEffect(() => {
        if (status) {
            setExistingAcc([
                ...existingAcc,
                status
            ]);
            onChange(status);
            props
                .history
                .push('/food');
        }

    }, [status])

    return (
        <div className='health-container'>
            <Form className='health-form'>
                <h4>Do you have any existing medical insurace/medical bills?</h4>
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
                    placeholder='$'/> {touched.medicalBill && errors.medicalBill && (
                    <p>{errors.medicalBill}</p>
                )}
                <h4>
                    Are you going to be applying for medical insurace?
                </h4>
                <Radio
                    name='buyingInsurance'
                    options={[
                    {
                        value: 'yes',
                        label: 'Yes'
                    }, {
                        value: 'no',
                        label: 'No'
                    }
                ]}/>

                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}
const formikHOC = withFormik({
    mapToPropsValues({currentHealthBills, medicalBill, buyingInsurance}) {
        return {
            currentHealthBills: currentHealthBills || '',
            medicalBill: medicalBill || '',
            buyingInsurance: buyingInsurance | 'yes'
        };
    },
    validationSchema: Yup
        .object()
        .shape({
            currentHealthBills: Yup
                .string()
                .required("input required"),
            medicalBill: Yup
                .number()
                .typeError('must be a number'),
            buyingInsurance: Yup
                .string()
                .required("input required")
        }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handleSubmit: health: ', values);
        setStatus(values);
        resetForm();
    }
})(Health);

export default formikHOC;