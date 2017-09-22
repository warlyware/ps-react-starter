import React, { Component } from 'react';
import 'react-fa';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Stars = (props) => {

  let stars = [];

  for (let i = 0; i < props.numberOfStars; i++) {
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
      <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  )
}

const Answer = (props) => {
  return(
    <div className="col-xs-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i}
        onClick={() => props.unselectNumber(number)}>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props) => {

  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }

  return(
    <div className="well text-center">
      {Numbers.list.map((number, i) =>
        <span key={i}
        className={numberClassName(number)}
        onClick={() => props.selectNumber(number)}>{number}</span>
      )}
    </div>
  );
}

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends Component {

  constructor() {
    super();
    this.state = {
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
    };
  }

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >=0 ) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row well">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Button selectedNumbers={this.state.selectedNumbers} />
          <Answer selectedNumbers={this.state.selectedNumbers}
          unselectNumber={this.unselectNumber}  />
        </div>
        <Numbers selectedNumbers={this.state.selectedNumbers}
        selectNumber={this.selectNumber} />
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
