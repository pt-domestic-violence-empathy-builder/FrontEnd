import React, {useState, useEffect} from 'react';

export default function FoodCosts(){
    const [foodCost,setFoodCost]=useState(0)
    const [groceryCost, setGroceryCost]=useState(0);
    const [monthlyCost, setMonthlyCost]=useState(0);
    const [numberOfPeople, setNumPeople]=useState(0);
    

    useEffect(()=>{},[])


    const groceryClickHandler=(event)=>{
        console.log('grocery event', event.target.value);
       setGroceryCost({...groceryCost,[event.target.name]:event.target.value});
    }

    const monthlyFoodCost=event=>{
        console.log('month cost event', event.target.value);
        setMonthlyCost({...monthlyCost,[event.target.name]:event.target.value});
        
    }

    const numPeople=event=>{
        console.log('number of people', event.target.value);
        setNumPeople({...numberOfPeople,[event.target.name]:event.target.value});
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setFoodCost(groceryClickHandler+monthlyFoodCost*numPeople)
    }
    console.log(foodCost());


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

                <button>Calculate Food Costs</button>

            </form>
        </div>
    )
}