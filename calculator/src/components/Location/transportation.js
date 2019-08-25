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
    const [isCar, setIsCar] = useState(false);
    const [isTruck, setIsTruck] = useState(false);

    useEffect(() => {
        if (status) {
            setTransitData([
                ...transitData,
                status
            ]);
        }
    }, [status])

    return (
        <div>
            <Form>
                <h4>Method of transportation</h4>
                <Field components='select' name='movingOptions' placeholder='Moving Options'>
                    <option value={isCar}>Car</option>
                    <option value={isTruck}>Moving Truck</option>
                </Field>
                {isTruck && <p>form for moving truck fades in</p>}

            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({}) {
        return {}
    }
})(Transportation)

export default formikHOC;