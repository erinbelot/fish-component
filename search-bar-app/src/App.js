import React, { Component } from 'react';

import './App.css';
import Search from './Search'

class App extends Component {

  state = {
    erin: "cat",
    fish: "matt"
  }

  render() {
    return (
      <div>
        <h1> This is the App Component </h1>
        <Search {...this.state} />
      </div>
    );
  }
}

export default App;

