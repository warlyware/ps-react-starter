import React, { Component } from 'react';
import {Icon} from 'react-fa';
import './App.css';

const Stars = (props) => {
  return(
    <div>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button>=</button>
    </div>
  )
}

const Answer = (props) => {
  return(
    <div>
      ...
    </div>
  )
}

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
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
}

export default App;
