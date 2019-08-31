import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';

const DestinationForm = ({errors, touched, values, status, onChange, history}) => {
    const [locations,
        setLocations] = useState([])

    const [distance,
        setDistance] = useState(0)

    useEffect(() => {
        if (status) {
            setLocations([
                ...locations,
                status
            ]);

            Axios
                .get(`https://www.mapquestapi.com/directions/v2/route?key=OfzYfK9PAfamGLyOdiLWOfD8a35UTDYc&from=${status.cityLocation},${status.zipLocation}&to=${status.cityDestination},${status.zipDestination}`)
                .then(res => {
                    // console.log('Api succes: distance', res.data);
                    setDistance(res.data.route.distance);
                    onChange(res.data.route)
                })
                .catch(err => {
                    // console.log('err', err);
                })

            history.push('/location/transportation')
        }
        

    }, [status])

    return (
        <div>
            <Form>
                <div className='moving-form'>
                    <div className='location-form'>
                        <h4 className='location-label'>Location</h4>
                        <Field
                            type='text'
                            className='location-input'
                            name='cityLocation'
                            placeholder='city, state'/> {touched.cityLocation && errors.cityLocation && (
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
                            placeholder='city, state'/> {touched.cityDestination && errors.cityDestination && (
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
        </div>
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
                .number(),
            cityDestination: Yup
                .string()
                .required("input required"),
            zipDestination: Yup
                .number()
                
        }),
    handleSubmit(values, {setStatus, resetForm}) {
        // console.log("handleSubmit: then: res: ", values);
        setStatus(values);
        resetForm();


    }
})(DestinationForm)

export default formikHOC;