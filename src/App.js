import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
        <Person name="max" age = "29" />
        <Person name = "Manu" age = "30"> My hobbies: racing </Person>
      </div>
    );
  }
}

export default App;
