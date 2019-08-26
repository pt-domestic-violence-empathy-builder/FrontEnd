import React from 'react';

export default function(){
    return(
        <div>
            <form>
                <input
                    type='text'
                    name='init-grocery-cost'
                    placeholder='Intital Grocery Cost'
                    />

                <input
                    type='text'
                    name='monthly-food-cost'
                    placeholder='Monthly Food Cost'
                    />

                <input
                    type='text'
                    name='number-of-people'
                    placeholder='Number of People to feed'
                    />

                <button>Calculate Food Costs</button>
            </form>
        </div>
    )
}