import React from 'react';
import './css/index.css'

import FoodCosts from './FoodCosts.js';
import MiscCat from './Misc.js';
import NavBar from './NavBar.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <FoodCosts/>
      <MiscCat/>
    </div>
  );
}

export default App;
