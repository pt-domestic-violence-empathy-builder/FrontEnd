import React, {useEffect, useState} from 'react';
import {Router, Route, NavLink} from "react-router-dom";
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const Transportation = (props) => {
    const {touched, values, errors, status, onChange} = props;
    const [transitData,
        setTransitData] = useState([]);

    const [show,
        setShow] = useState(true);

    useEffect(() => {
        if (status) {
            setTransitData([
                ...transitData,
                status
            ]);
            onChange(status);
            console.log(status);
            props.history.push('/transportation/options')
        }

    }, [status])

    return (
        <div>
        <Form className='transit-options'>
            <h4>Method of Transportation</h4>
            <label >
                <span class="checkmark"></span>
                <Field type="checkbox" name="car" checked={values.car}/>
                Car
            </label>
            <label >
                <span class="checkmark"></span>
                <Field type="checkbox" name="truck" checked={values.truck}/>
                Truck
            </label>
            <label >
                <span class="checkmark"></span>
                <Field type="checkbox" name="other" checked={values.other}/>
                Other
            </label>
            <button type='submit'>Next</button>
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