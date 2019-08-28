import React from 'react';
import './css/index.css';
import Location from './components/Location/LocationRouter.js';
import Health from './components/Health/HealthRouter.js'
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Styled from 'styled-components'
import {Router, Route, NavLink} from "react-router-dom";

const Nav = Styled.nav `
  display:flex;
  flex-flow: row wrap;
  align-items:center;
`

const FormContainer = Styled.div `
  display:flex;
  flex-flow: column;
  align-items: center;
  margin:20px auto;

`

function App() {
    return (
        <div className="App">
            <FormContainer>
                <Nav>
                    <NavLink to='/location'>
                        <Button content='Location' size='large' color='purple'/>
                    </NavLink>
                    <NavLink to='/health'>
                        <Button content='Health' size='large' color='red'/>
                    </NavLink>
                    <Button content='Food' size='large' color='blue'/>
                    <Button content='Misc' size='large' color='green'/>
                </Nav>
                <Location/>
                <Health/>
            </FormContainer>

        </div>
    );
}

export default App;
