import React, { Component } from 'react';
import './App.css';

const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
}

class Form extends Component {

  constructor() {
    super();
    this.state = {
      userName: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle event', this.userNameInput.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        value={this.state.userName}
        onChange={(event) => this.setState({ userName: event.target.value })}
        placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [
        {
          name: "Dan Ward",
          avatar_url: "https://avatars0.githubusercontent.com/u/11333794?v=4",
          company: "Null Co",
        },
        {
          name: "Trey Huffine",
          avatar_url: "https://avatars3.githubusercontent.com/u/11709986?v=4",
          company: "Postmates",
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
