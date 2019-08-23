import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, withFormik} from 'formik';
import Styled from 'styled-components';
import * as Yup from 'yup';

const DestinationForm = ({ errors, touched, values}) => {

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

    const [locations, SetLocations] = useState([])

    return (
        <Formik>
            <Form>
                <WindowForm>
                    <LocationContainer>
                        <LocationBox>
                            <h4 className='location-label'>Location</h4>
                            <Field type='text' className='location-input' name='cityLocation' placeholder='city'/>
                            {touched.cityLocation && errors.cityLocation && (
                                <p>{errors.cityLocation}</p>
                            )}
                            <Field type='text' className='location-input' name='zipLocation' placeholder='zip'/>
                        </LocationBox>
                        <LocationBox>
                            <h4 className='destination-label'>Destination</h4>
                            <Field type='text' className='location-input' name='cityDestination' placeholder='city'/>
                            <Field type='text' className='location-input' name='zipDestination' placeholder='zip'/>
                        </LocationBox>
                    </LocationContainer>
                </WindowForm>

                <button>next</button>
            </Form>
        </Formik>
    )
}

const formikHOC = withFormik({
    mapPropsToValues({cityLocation, zipLocation, cityDestination, zipDestination}){
        return {
            cityLocation: cityLocation || '',
            zipLocation: zipLocation || '',
            cityDestination: cityDestination || '',
            zipDestination: zipDestination || ''
        };
    },
    validationSchema: Yup.object().shape({
        cityLocation: Yup.string().required("input required"),
        zipLocation: Yup.number().required("input required"),
        cityDestination: Yup.string().required("input required"),
        zipDestination: Yup.number().required("input required"),
    }),
    handleSubmit(values, {setStatus, resetForm}){
        console.log(values);
    }
})(DestinationForm)

export default formikHOC;