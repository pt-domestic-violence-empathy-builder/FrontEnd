import React, {useEffect, useState} from 'react';
import {Form, Field, withFormik} from 'formik';

import * as Yup from 'yup';

 function FoodCost(props){
    const{
        errors,
        touched,
        values,
        status,
        onChange,
        history
    } = props
    const [foodCost,setFoodCost]=useState([])

    useEffect(()=>{
        if (status){
            setFoodCost([...foodCost,status]);
            onChange(status);
            history.push('/misc');
        }
        
    },[status])

    

    return(
        <div>
            <Form>
                <Field
                    type='text'
                    name='FeedCost'
                    placeholder='Intital Grocery Cost'
                    />

                <Field
                    type='text'
                    name='monthlyFoodCost'
                    placeholder='Monthly Food Cost'
                    />

                <Field
                    type='text'
                    name='numberOfPeople'
                    placeholder='Number of People to feed'
                    />

                <button type='submit'>Calculate Food Costs</button>

            </Form>
        </div>
    )
}

const formikHOC = withFormik({
    mapToPropsValues({FeedCost,monthlyFoodCost,numberOfPeople}) {
        return {
            FeedCost: FeedCost ||'',
            monthlyFoodCost: monthlyFoodCost ||'',
            numberOfPeople: numberOfPeople || ''
        };
    },
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('handle submit: budget:', values);
        setStatus(values);
    }
})(FoodCost)


export default formikHOC;