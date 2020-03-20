import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf-village'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the smurf Village</h1>
        <Smurf/>
      </div>
    );
  }
}

export default App;
