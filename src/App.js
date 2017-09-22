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

const DoneFrame = (props) => {
  return(
    <div className="text-center">
      <h2>{props.doneStatus}</h2>
      <button className="btn btn-secondary"
      onClick={props.resetGame}>Play Again</button>
    </div>
  )
}

class Game extends Component {

  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  static initalState = () => ({
    usedNumbers: [],
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null,
  });

  constructor() {
    super();
    this.state = Game.initalState();
  }

  resetGame = () => this.setState(Game.initalState());

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
    }), this.updateDoneStatus);
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
    }), this.updateDoneStatus);
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Win!' };
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: 'YOU LOSE' };
      }
    });
  }

  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
    const possibleSolutions = Numbers.list.filter(number => {
      usedNumbers.indexOf(number) === -1;
    });

    return this.possibleCombinationSum(possibleSolutions);
  }

  possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

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
        <br />
        {this.state.doneStatus ?
          <DoneFrame doneStatus={this.state.doneStatus}
          resetGame={this.resetGame} /> :
          <Numbers selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={this.state.usedNumbers} />
        }
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
