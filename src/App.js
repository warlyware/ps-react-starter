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

let data = [
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

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
}

class Form extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Form />
        <CardList cards={data} />
      </div>
    );
  }
}

export default App;
