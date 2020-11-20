import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';
const StyledDiv = styled.div`

width: 60%;
margin:16px auto;
border:1px solid #eeeeee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align: center;

@media (min-width: 500px){
    width:450px;
}

`;
const person = (props) => {
// return <p> I am a Person and I am {Math.floor(Math.random()*30)} years old!</p>
// const style ={
//     '@media (min-width: 500px)':{
//         width:'450px'
//     }
// }
return (
// {/* <div className="Person" style={style}> */}
<StyledDiv>
<p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</StyledDiv>
);
};

export default person;