import React from 'react';

const Number = ({ changeColor, number, color }) => {
  const onChangeColor = (e) => {
    e.preventDefault();
    changeColor();
  };

  console.log('  rendering number with', number, color);

  return (
    <div>
      <div style={ {color: color} }>I'm a number: { number }</div>
      <a href="#" onClick={ onChangeColor }>Color</a>
    </div>
  );
};

export default Number;

