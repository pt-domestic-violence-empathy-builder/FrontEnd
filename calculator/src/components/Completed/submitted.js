import React from 'react';
import Check from '../../img/check.png'
const Submitted = ({isSubmitted}) => {
    return (
        <div className='submitted-container'>
            <h1>Calculations Completed</h1>
            <img src={Check} alt="check" />
        </div>
    )
}

export default Submitted;