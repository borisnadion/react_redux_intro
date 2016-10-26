import React, { Component } from 'react';
import './App.css';
import Number from './components/number';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = { counter: 0 };
    this.onTimer = this.onTimer.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.onTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.onTimer);
  }

  onTimer() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log('rendering App');
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello world</h2>
        </div>
        <div className="App-intro">
          <Number value={ this.state.counter } />
        </div>
      </div>
    );
  }
}

export default App;
