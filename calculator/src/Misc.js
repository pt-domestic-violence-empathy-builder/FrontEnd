import React, {useState} from 'react';

export default function MiscCat(){
    const [miscCost, setMiscCost]=useState()
    console.log(miscCost);

    const miscClickHandler=event=>{
        console.log('Misc Event', event.target.value);
    }

    
    return(
        <div>
            <form>
                <input
                    type='text'
                    name='legal-costs'
                    placeholder='Any expected Legal Costs'
                    onChange={miscClickHandler}/>
                    
                <input
                    type='text'
                    name='security-costs'
                    placeholder='Any additional security measures'
                    onChange={miscClickHandler}/>
                <input
                    type='text'
                    name='cell-phone'
                    placeholder='Cost of a new Phone and/or number'
                    onChange={miscClickHandler}/>

                <button>Calculate Miscellaneous Costs</button>
            </form>
        </div>
    )
}