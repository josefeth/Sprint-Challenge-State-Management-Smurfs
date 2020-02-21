import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"

function Smurf(props) {

    const [smurf, setSmurf] = useState({});

    useEffect(() => {
        setSmurf(props.smurf);
    }, [props.smurf])

    function deleteSmurf (e) {
        e.preventDefault();
        console.log("deleting");
        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => alert("Deleted Smurf"))
            .catch(err => alert("Error Deleting Smurf"))
            .finally(() => window.location.reload()/*reload page*/)
    }

    return (
        <div className="SmurfCard">
            <p className="SmurfCardp">{smurf.name}</p>
            <p className="SmurfCardp">Height: {props.smurf.height}</p>
            <p className="SmurfCardp">Age: {props.smurf.age}</p>
            <button onClick={e => {console.log("deleting onClick"); deleteSmurf(e)}}>Delete</button>
        </div>
    );
}

export default Smurf; 