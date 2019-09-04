import React, { useEffect, useState } from 'react';
import { Formik, FormikProps, Form, Field, withFormik } from 'formik';

import * as Yup from 'yup';

const UserBudget = (props) => {
    const {
        errors,
        touched,
        values,
        status,
        onChange,
        history
    } = props

    const [budget,
        setBudget] = useState([])

    useEffect(() => {
        if (status) {
            setBudget([
                ...budget,
                status
            ]);
            onChange(status);
            props.history.push('/location');

        }

    }, [status])


    return (
        <div className='budget-form'>
            <Form>
                <h4>Let's get started.What is your budget?</h4>
                <Field type='input' className='budget-input' name='budget' placeholder='$' />
                <button type='submit'>Next</button>
            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({ budget }) {
        return {
            budget: budget || ''
        };
    },
    handleSubmit(values, { setStatus, resetForm }) {
        // console.log('handle submit: budget:', values);
        setStatus(values);
    }
})(UserBudget)

export default formikHOC;