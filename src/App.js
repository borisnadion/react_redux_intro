import React, { Component } from 'react';
import './App.css';
import Number from './components/number';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello world</h2>
        </div>
        <p className="App-intro">
          <Number value={ 12 } />
        </p>
      </div>
    );
  }
}

export default App;
