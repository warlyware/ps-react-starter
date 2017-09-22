import React, { Component } from 'react';
import {Icon} from 'react-fa';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Stars = (props) => {
  return(
    <div className="col-xs-5">
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
    <div className="col-xs-2">
      <button>=</button>
    </div>
  )
}

const Answer = (props) => {
  return(
    <div className="col-xs-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  return(
    <div className="well text-center">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      ...
    </div>
  );
}

class Game extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row well">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div >
        <Game />
      </div>
    );
  }
}

export default App;
