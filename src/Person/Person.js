import React from 'react';



const person = (props) => {
// return <p> I am a Person and I am {Math.floor(Math.random()*30)} years old!</p>
return <p> I am {props.name} and I am {props.age} years old</p>
}

export default person;