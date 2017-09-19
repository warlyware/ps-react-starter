import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Button />
    );
  }
}

export default App;
