import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

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

const getColor = () => {
  const colors = [Math.random(), Math.random(), Math.random()];
  return `rgba(${colors.map(c => (c * 127).toFixed()).join(',')}, 1)`;
};

export default class Number extends Component {

  constructor() {
    super(...arguments);
    this.state = { value: buildValue(this.props.value), color: getColor() };
    this.onChangeColor = this.onChangeColor.bind(this);
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
    const res = shallowCompare(this, nextProps, nextState);
    console.log('  shouldComponentUpdate - ', res);
    return res;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('  componentDidUpdate - props/state changed=', shallowCompare(this, prevProps, prevState));
  }

  onChangeColor(e) {
    e.preventDefault();
    this.setState({ color: getColor() });
  }

  render() {
    console.log(`  rendering number with props=${this.props.value}, state=${this.state.value}`);
    const style = { color: this.state.color };
    return (
      <div>
        <div style={ style }>I'm a number: { this.state.value }</div>
        <a href="#" onClick={ this.onChangeColor }>Color</a>
      </div>
    );
  }
}
