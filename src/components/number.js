import React from 'react';

const convertNumber = (number) => {
  let res = number;
  if (number % 2) {
    res += " even";
  } else {
    res += " odd";
  }
  return res;
};

const Number = ({ changeColor, number, color }) => {
  const onChangeColor = (e) => {
    e.preventDefault();
    changeColor();
  };

  console.log('  rendering number with', number, color);

  const value = convertNumber(number);

  return (
    <div>
      <div style={ {color: color} }>I'm a number: { value }</div>
      <a href="#" onClick={ onChangeColor }>Color</a>
    </div>
  );
};

export default Number;

