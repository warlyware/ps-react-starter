import React, { Component } from 'react';
import {Icon} from 'react-fa';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }

  return(
    <div className="col-xs-5">
      {stars}
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
      {Numbers.list.map((number, i) =>
        <span key={i}>{number}</span>
      )}
    </div>
  );
}

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
