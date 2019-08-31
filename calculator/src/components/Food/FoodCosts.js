import React, {useEffect, useState} from 'react';
import {Form, Field, withFormik} from 'formik';
import Styled from 'styled-components';

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
                    <div className='foodCosts'>
                        <h4 className='foodHeader'>Food Costs</h4>
                        <div className='foodForm'>
                        <Field
                            type='text'
                            className='FeedCost'
                            name='FeedCost'
                            placeholder='$ Intital Grocery Cost'
                            />

                        <Field
                            type='text'
                            className='monthlyFoodCost'
                            name='monthlyFoodCost'
                            placeholder='$ Monthly Food Cost'
                            />

                        <Field
                            type='text'
                            className='numberOfPeople'
                            name='numberOfPeople'
                            placeholder='$ Number of People to feed'
                            />

                        <button type='submit' className='submitBtn'>Calculate Food Costs</button>
                        </div>
                        </div>
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