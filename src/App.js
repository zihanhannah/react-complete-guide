 import React, { Component } from 'react';
// import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max" , age: 28},
      {name:"Manu", age: 30},
      {name:"Stephanie", age:26}
  
    ],

    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({persons: [
      {name: newName , age: 28},
      {name:"Manu", age: 30},
      {name:"Stephanie", age:26}
    ]
  })
  }

  nameChangedHandler = (event)=> {
    this.setState({persons: [
      {name: "Max", age: 28},
      {name:event.target.value, age: 30},
      {name:"Stephanie", age:26}
    ]
  })
  }

  render() {
    return (
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
        <p>This is really working!</p>
        {/* <Person name="max" age = "29" />
        <Person name = "Manu" age = "30"> My hobbies: racing </Person> */}

        <button onClick={()=>this.switchNameHandler("Maxim")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>
        </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'ZZ')}
        changed={this.nameChangedHandler}> My hobbies: Racing
        </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
        </Person>
        
      </div>
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