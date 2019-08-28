import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Radio} from 'react-formik-ui';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const Transportation = (props) => {
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
            <h4>Do you have any existing medical insurace?</h4>
            <Form className='health-form'>
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

            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({car, truck, other}) {
        return {
            car: car || false,
            truck: truck || false,
            other: other || false
        };
    },
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handleSubmit: then: res ', values);
        setStatus(values);
        resetForm();
    }

})(Transportation)

export default formikHOC;