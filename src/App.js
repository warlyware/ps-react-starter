import React, { Component } from 'react';
import './App.css';

const Card = (props) => {
  return(
    <div>
      <img src="//placehold.it/75" />
      <div>
        <div>Name here...</div>
        <div>Company here...</div>
      </div>
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <Card />
    );
  }
}

export default App;
