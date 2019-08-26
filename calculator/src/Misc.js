import React from 'React';

export default function(){
    return(
        <div>
            <form>
                <input
                    type='text'
                    name='legal-costs'
                    placeholder='Any expected Legal Costs'/>
                <input
                    type='text'
                    name='security-costs'
                    placeholder='Any additional security measures'/>
                <input
                    type='text'
                    name='cell-phone'
                    placeholder='Cost of a new Phone and/or number'>
                <input
                    type=''>
                <input></input>
                <input></input>

                <button>Calculate Miscellaneous Costs</button>
            </form>
        </div>
    )
}