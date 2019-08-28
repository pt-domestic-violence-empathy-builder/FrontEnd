import React, {useEffect, useState} from 'react';
import {Router, Route, NavLink} from "react-router-dom";
import {Form, Field, withFormik} from 'formik';
import {Radio} from 'react-formik-ui';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const OtherQuestions = (props) => {
    const { touched, values, errors, status, onChange } = props;
    const [rental, setRentalData] = useState([]);

    useEffect(() => {
        if (status) {
            setRentalData([
                ...rental,
                status
            ]);
            onChange(status);
        }

    }, [status])

    return ( < div className = 'rent-form' > <Form className='other'>
        <h4>Are you going to stay at a hotel?</h4>
        <Radio
            name='hotel'
            options={[
            {
                value: 'yes',
                label: 'Yes'
            }, {
                value: 'no',
                label: 'No'
            }
        ]}/>
        <h4>How big is the apartment that you are going to move in?</h4>
        <Field component="select" className="apt-size" name="size">
            <option>select apt size</option>
            <option value='0'>Studio</option>
            <option value='1'>1 Bed</option>
            <option value='2'>2 Bed</option>
        </Field>

        <button type='submit'>Next</button>
    </Form> < /div>
    )


}

const formikHOC = withFormik({
    mapToPropsValues({hotel, size}){
        return {
            hotel: hotel|| '',
            size: size || ''
        };
    },
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handleSubmit:', values);
        setStatus(values);
        resetForm();
    }
})(OtherQuestions);

export default formikHOC;