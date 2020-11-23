import React, {Component} from 'react';
import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css'
// const StyledDiv = styled.div`

// width: 60%;
// margin:16px auto;
// border:1px solid #eeeeee;
// box-shadow:0 2px 3px #ccc;
// padding:16px;
// text-align: center;

// @media (min-width: 500px){
//     width:450px;
// }

// `;
// const person = (props) => {
//     console.log('[Person.js] rendering...');
//     // const rnd = Math.random();
//     // if(rnd > 0.7){
//     //     throw new Error('Something went wrong');
//     // }
// // return <p> I am a Person and I am {Math.floor(Math.random()*30)} years old!</p>
// // const style ={
// //     '@media (min-width: 500px)':{
// //         width:'450px'
// //     }
// // }
// return (
// // {/* <div className="Person" style={style}> */}
// <div className={classes.Person}>
// {/* <StyledDiv> */}
// <p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>
// <p>{props.children}</p>
// <input type="text" onChange={props.changed} value={props.name}></input>
// {/* // </StyledDiv> */}
// </div>
// );
// };

// export default person;

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        return (
            // {/* <div className="Person" style={style}> */}
            <div className={classes.Person}>
            {/* <StyledDiv> */}
            <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            {/* // </StyledDiv> */}
            </div>
            );
    }
}
export default Person;