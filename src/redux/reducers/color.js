import { handleActions } from 'redux-actions';

const getColor = () => {
  const colors = [Math.random(), Math.random(), Math.random()];
  return `rgba(${colors.map(c => (c * 127).toFixed()).join(',')}, 1)`;
};

export const color = handleActions({
  'generate': () => getColor()
}, 'rgba(0, 0, 0, 1)');
