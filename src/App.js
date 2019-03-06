import React, { Component } from 'react';
import logo from './logo.svg';
import SetList from './setList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BOILER ROOM STUFF</h1>
        <SetList />
      </div>
    );
  }
}

export default App;
