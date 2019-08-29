import React, {useState} from 'react';

export default function FoodCosts(){
    const [foodCost, setFoodCost]=useState(0);
    console.log(foodCost);

    const groceryClickHandler=event=>{
        console.log('grocery event', event.target.value);
    }

    const monthlyFoodCost=event=>{
        console.log('month cost event', event.target.value);
    }

    const numPeople=event=>{
        console.log('number of people', event.target.value);
    }

    const handleSubmit=event=>{
        event.preventDefault()
        setFoodCost(groceryClickHandler+monthlyFoodCost*numPeople)
    }
    console.log('submit handler',handleSubmit);


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='init-grocery-cost'
                    placeholder='Intital Grocery Cost'
                    onChange={groceryClickHandler}
                    />

                <input
                    type='text'
                    name='monthly-food-cost'
                    placeholder='Monthly Food Cost'
                    onChange={monthlyFoodCost}
                    />

                <input
                    type='text'
                    name='number-of-people'
                    placeholder='Number of People to feed'
                    onChange={numPeople}
                    />

                <button onClick={()=>{setFoodCost(groceryClickHandler+monthlyFoodCost*numPeople)}}>Calculate Food Costs</button>
            </form>
        </div>
    )
}