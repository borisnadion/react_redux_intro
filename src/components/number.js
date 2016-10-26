import React from 'react';

const Number = ({ value }) => {
  console.log(`rendering number with ${value}`);
  return (
    <div>I'm a number { value }</div>
  );
};

export default Number;
