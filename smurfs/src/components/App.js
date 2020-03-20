import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf-village'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='main-title'>Welcome to Smurf Village</h1>
        <Smurf/>
      </div>
    );
  }
}

export default App;
