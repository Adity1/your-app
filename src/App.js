import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
  name:'Hari',
  address:"Sanepa"
    }
  }
  person={
    name:'Hari',
    address:"Sanepa"
  }
  age=20
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User detail={this.person} age={this.age}> />
      </div>
    )
  }
}

export default App;
  
