import React, { Component } from 'react';
import './App.css';

class Button extends Component {

  handleClick = () => {

  }

  render() {
    return(
      <button onClick={this.props.handleClick}>
        +1
      </button>
    );
  }
}

const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <Button handleClick={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
