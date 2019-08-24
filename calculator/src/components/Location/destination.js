import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';

const DestinationForm = ({errors, touched, values, status}) => {

    const LocationBox = Styled.div `
        display:flex;
        flex-flow: column nowrap;
    `;

    const LocationContainer = Styled.div `
        display:flex;
        flex-flow: column nowrap;
        width:300px;
        margin: 10px auto;
    `;

    const WindowForm = Styled.div `
        margin: 10px auto;
    `;

    const [locations,
        setLocations] = useState([])

    useEffect(() => {
        if (status) {
            setLocations([
                ...locations,
                status
            ]);
            console.log(status)
        }

    }, [status])

    return (
        <Form>
            <div className='moving-form'>
                <div className='location-form'>
                    <h4 className='location-label'>Location</h4>
                    <Field
                        type='text'
                        className='location-input'
                        name='cityLocation'
                        placeholder='city'/> {touched.cityLocation && errors.cityLocation && (
                        <p>{errors.cityLocation}</p>
                    )}
                    <Field
                        type='text'
                        className='location-input'
                        name='zipLocation'
                        placeholder='zip'/> {touched.zipLocation && errors.zipLocation && (
                        <p>{errors.zipLocation}</p>
                    )}
                </div>
                <div className='destination-form'>
                    <h4 className='destination-label'>Destination</h4>
                    <Field
                        type='text'
                        className='location-input'
                        name='cityDestination'
                        placeholder='city'/> {touched.cityDestination && errors.cityDestination && (
                        <p>{errors.cityDestination}</p>
                    )}
                    <Field
                        type='text'
                        className='location-input'
                        name='zipDestination'
                        placeholder='zip'/> {touched.zipDestination && errors.zipDestination && (
                        <p>{errors.zipDestination}</p>
                    )}
                </div>
                <button type='submit'>Next</button>
            </div>
        </Form>
    )
}

const formikHOC = withFormik({
    mapPropsToValues({cityLocation, zipLocation, cityDestination, zipDestination}) {
        return {
            cityLocation: cityLocation || '',
            zipLocation: zipLocation || '',
            cityDestination: cityDestination || '',
            zipDestination: zipDestination || ''
        };
    },
    validationSchema: Yup
        .object()
        .shape({
            cityLocation: Yup
                .string()
                .required("input required"),
            zipLocation: Yup
                .number()
                .required("needs to a zip code"),
            cityDestination: Yup
                .string()
                .required("input required"),
            zipDestination: Yup
                .number()
                .required("needs to a zip code")
        }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("handleSubmit: then: res: ", values);
        setStatus(values);
        resetForm();
    }
})(DestinationForm)

export default formikHOC;