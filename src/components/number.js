import React, { Component } from 'react';

// expensive computation goes here
const buildValue = (value) => {
  console.log('  expensive computation');
  let res = value;
  if (value % 2) {
    res += ' even';
  } else {
    res += ' odd';
  }
  return res;
};

export default class Number extends Component {

  constructor() {
    super(...arguments);
    this.state = { value: buildValue(this.props.value) };
  }

  componentWillReceiveProps(nextProps) {
    console.log('  componentWillReceiveProps, nextProps=', nextProps);
    if (nextProps.value === this.props.value) {
      console.log("  -----same props");
    }
    else {
      this.setState({ value: buildValue(nextProps.value) });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === this.props.value) {
      console.log('  shouldComponentUpdate - no!');
      return false;
    }
    console.log('  shouldComponentUpdate - yes');
    return true;
  }

  render() {
    console.log(`  rendering number with props=${this.props.value}, state=${this.state.value}`);
    return (
      <div>I'm a number: { this.state.value }</div>
    );
  }
}
