import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>What??</h2>
          <Person name="A" age="3"> Chicll</Person>
          <Person name="A" age="4"> CADhicll</Person>
      </div>
    );
  }
}

export default App;
