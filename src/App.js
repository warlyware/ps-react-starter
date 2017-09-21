import React, { Component } from 'react';
import './App.css';

class Game extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Play Nine</h3>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Game />
        <Game />
      </div>
    );
  }
}

export default App;
