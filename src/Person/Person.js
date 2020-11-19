import React from 'react';
import Radium from 'radium';


const person = (props) => {
// return <p> I am a Person and I am {Math.floor(Math.random()*30)} years old!</p>
return (
<div className="Person">
<p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>
)
}

export default Radium(person);