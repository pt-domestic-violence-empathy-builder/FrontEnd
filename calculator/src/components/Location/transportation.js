import React, { useEffect, useState } from 'react';
import { Formik, FormikProps, Form, Field, withFormik } from 'formik';
import { Button } from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const Transportation = (props) => {
    const {
        touched,
        values,
        errors,
        status
    } = props;
    const [transitData,
        setTransitData] = useState([]);

    useEffect(() => {
        if (status) {
            setTransitData([...transitData,status]);
        }
    }, [status])

    return (
        <div>
            <h4>Method of transportation</h4>
            <Field component='select' name='movingOptions' placeholder='Moving Options'>
                <option> Select Transportation</option>
                <option value={true}>Car</option>
                <option value={true}>Moving Truck</option>
            </Field>
            <Form>
                
                <button type='submit'>next</button>
            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({isCar, isTruck}) {
        return {
            isCar: isCar || false,
            isTruck: isTruck || false
        };
    }, 
    handleSubmit(values,{setStatus, resetForm}){
        console.log('handleSubmit: then: res ', values );
        setStatus(values);
        resetForm();
    }

})(Transportation)

export default formikHOC;