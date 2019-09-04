import React, { useState, useEffect } from 'react';
import { Cost } from '../styles';

const RightView = (props) => {
    const { budgetCost,
        locationCost,
        healthCost,
        foodCost,
        miscCost,
        difference,
        color
    } = props

    const postCondition = budgetCost !== null &&
        locationCost !== null &&
        healthCost !== null &&
        foodCost !== null &&
        miscCost !== null;

    if (postCondition) {
        return (
            <div className='rightView'>
                <h4> Remaining Balance: {difference}</ h4>
            </div>
        )
    } else if (budgetCost > 0) {
        return (
            <div className={`rightView ${color ? color : ''}`}>
                <Cost>Your Budget: {budgetCost}</Cost>
                <Cost>Relocation Cost: {locationCost}</Cost>
                <Cost>Health Cost: {healthCost}</Cost>
                <Cost>Food Cost: {foodCost}</Cost>
                <Cost>Misc Cost: {miscCost}</Cost>

            </div>
        )
    } else {
        return (
            <div className={`rightView ${color ? color : ''}`}>
                <h1> Start Planning. </h1>
            </div>
        )
    }

}

export default RightView;