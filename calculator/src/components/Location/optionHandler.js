import React, {useState,useEffect} from 'react';
import { Formik, FormikProps, Form, Field, withFormik } from 'formik';


const OptionHandler = (props) => {
    const {transitData} = props;
    console.log('props',props);
    const [extraTransitCost, SetExtraTransitCost] = useState([]);

    return(
        <div>
            
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({size}){
        return{
            size: size || ''
        };
    }
})(OptionHandler)

export default formikHOC;