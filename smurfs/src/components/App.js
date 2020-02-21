import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Smurfs from "./Smurts";
import AddSmurf from "./AddSmurf";
import styled from 'styled-components'

const Li = styled.li`
list-style-type: none;
font-weight:bold;
border: 1px solid black;
border-radius:10px;
font-size-2rem;
width: 12%;
height: 20px;
margin: 0 auto;


`;


function App() {
  return (
    <Router>
      <div>
        <ul className='navigation'>
          <div className="HomeButton">
          <li>
            <Link style={{ textDecoration: 'none', color:'white'}} to="/">Home</Link>
          </li>
          </div>
          <div className="HomeButton">
          <li>
            <Link style={{ textDecoration: 'none', color:'white'}}to="/addsmurf">Add Smurf</Link>
          </li>
          </div>
        </ul>
        <div className="HomeNav">
        <Route  exact path="/" component={Smurfs} />
        <Route path="/addsmurf" component={AddSmurf} />
        </div>
        

      </div>
  
    </Router>
  )
}
  

export default App;
