import React, { Component } from 'react';
// import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
// import person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
  color:black;
}
`;
class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: "Max", age: 28 },
      { id: 'vasdf1', name: "Manu", age: 30 },
      { id: 'asdf11', name: "Stephanie", age: 26 }

    ],

    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');      
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 30 },
  //       { name: "Stephanie", age: 26 }
  //     ]
  //   })
  // }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // ... equals to assign
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 30 },
    //     { name: "Stephanie", age: 26 }
    //   ]
    // })
  }
  deletePersonHandler = (personIndex) => {
    //making a copy of persons
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
  }
    // second method for toggle handler:::recommanded way to use
    let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person
          // first method
          // click={() => this.deletePersonHandler(index)}
          // second method
          click={this.deletePersonHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
      })}
    </div>
    // <div>
    //   <Person
    //     name={this.state.persons[0].name}
    //     age={this.state.persons[0].age}>
    //   </Person>
    //   <Person
    //     name={this.state.persons[1].name}
    //     age={this.state.persons[1].age}
    //     click={this.switchNameHandler.bind(this, 'ZZ')}
    //     changed={this.nameChangedHandler}> My hobbies: Racing
    // </Person>
    //   <Person
    //     name={this.state.persons[2].name}
    //     age={this.state.persons[2].age}>
    //   </Person>
    // </div>
  );
  style.backgroundColor = "red";
  style[':hover'] = {
    backgroundColor: 'salmon',
    color: 'black'
  };
}

// let classes = ['red','bold'].join(' ');
const classes = [];
if (this.state.persons.length <= 2) {
  classes.push('red')//classes = ['red']

}
if (this.state.persons.length <= 1) {
  classes.push('bold')//classes = ['red','bold']

}
return (
  // <StyleRoot>
  <div className="App">
    {/* <h1> I am react app</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}


    <h1>Hello</h1>
    {/* <p calssName={classes}>This is really working!</p> */}
    <p className={classes.join(' ')}>This is really working!</p>
    {/* <Person name="max" age = "29" />
        <Person name = "Manu" age = "30"> My hobbies: racing </Person> */}

    {/* <button 
          style={style}
          onClick={()=>this.switchNameHandler("Maxim")}>Switch Name</button> */}
    {/* <button
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>

    {/* first method for toggle handler */}
    {/* {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}>
              </Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'ZZ')}
                changed={this.nameChangedHandler}> My hobbies: Racing
        </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}>
              </Person>
            </div> : null

        } */}

    {/* second method for toggle handler */}
    {persons}


  </div>
  // </StyleRoot>
);
  }
}
export default App;

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 26}
//     ]
//     // otherState:'some other value'
//   });

//   const [otherState,setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = ()=>{
//     setPersonsState({
//       persons: [
//         { name: 'Maximiliam', age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Stephanie', age: 26}
//       ]
//     });
//   };

//   return (
//     <div className="app">
//       <h1>Hi, I'm a React App</h1>
//       <p> This is really working!</p>
//       <button onClick={switchNameHandler}> Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>

//   );
// }
// export default app;
