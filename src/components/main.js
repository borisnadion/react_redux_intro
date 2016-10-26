import React, { Component } from 'react';
import Number from './number';

class Main extends Component {
  constructor() {
    super(...arguments);
    this.onTimer = this.onTimer.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.onTimer, 2000);
    setTimeout(() => this.forceUpdate(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.onTimer);
  }

  onTimer() {
    this.props.increment(1);
  }

  render() {
    return (
      <div className="App-intro">
        <Number number={ this.props.counter } />
      </div>
    );
  }
}
export default Main;
