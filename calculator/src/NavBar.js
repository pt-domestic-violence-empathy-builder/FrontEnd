import React from 'react';
import { Link } from 'react-router-dom';
import FoodCosts from './components/Budget/Food/FoodCosts.js/index.js';
import MiscCat from './Misc.js'


export default function NavBar(){
    return(
        <div>
            <div>
                <Link to='/food' component={FoodCosts}/>
            </div>
            <div>
                <Link to='/misc' component={MiscCat}/>
            </div>
        </div>
    )
}