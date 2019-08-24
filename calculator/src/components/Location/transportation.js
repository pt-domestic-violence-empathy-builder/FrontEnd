import React, {useEffect, useState} from 'react';
import {Formik, FormikProps, Form, Field, Fieldset withFormik} from 'formik';
import {Button} from 'semantic-ui-react';
import Styled from 'styled-components';
import * as Yup from 'yup';


const Transportation = ({touched, values, errors, status}) =>  {
    const [transitData,setTransitData] = useState([]);

    useEffect(() => {
        if (status) {
            setTransitData([...transitData,status]);
        }
    }, [status])
    
    return(
        <div>
            <Form>
                <h4>Method of transportation</h4>
                <h5>car</h5>

            </Form>
        </div>
    )}

const formikHOC = withFormik({
    mapToPropsValues({}) {
        return {}
    }
})(Transportation)

export default formikHOC;