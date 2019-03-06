import React, { Component } from 'react';
import SetList from './setList.js';
import './App.css';

document.body.style = 'background: black;';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">BOILER ROOM</h1>
        <SetList />
      </div>
    );
  }
}

export default App;
