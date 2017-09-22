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

  let button;

  switch(props.answerIsCorrect) {
    case true:
      button =
        <button className="btn btn-success"
        onClick={props.acceptAnswer}>
          <i className="fa fa-check" />
        </button>
      break;
    case false:
      button =
        <button className="btn btn-danger">
          <i className="fa fa-times" />
        </button>
      break;
    default:
      button =
        <button className="btn"
        onClick={props.checkAnswer}
        disabled={props.selectedNumbers.length === 0}>
          =
        </button>
      break;
  }


  return(
    <div className="col-xs-2">
      {button}
      <br /><br />
      <button className="btn btn-warning btn-sm"
      onClick={props.redraw}
      disabled={props.redraws === 0}>
        <i className="fa fa-refresh" /> &nbsp;
       {props.redraws}
      </button>
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
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
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

  static randomNumber = () => 1 + Math.floor(Math.random() * 9);

  constructor() {
    super();
    this.state = {
      usedNumbers: [],
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      redraws: 5
    };
  }

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >=0 ) {
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber()
    }));
  }

  redraw = () => {
    if (this.state.redraws === 0) {
      return;
    }
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }));
  }

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row well">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Button selectedNumbers={this.state.selectedNumbers}
          checkAnswer={this.checkAnswer}
          answerIsCorrect={this.state.answerIsCorrect}
          acceptAnswer={this.acceptAnswer}
          redraw={this.redraw}
          redraws={this.state.redraws} />
          <Answer selectedNumbers={this.state.selectedNumbers}
          unselectNumber={this.unselectNumber} />
        </div>
        <Numbers selectedNumbers={this.state.selectedNumbers}
        selectNumber={this.selectNumber}
        usedNumbers={this.state.usedNumbers} />
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
