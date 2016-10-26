const getColor = () => {
  const colors = [Math.random(), Math.random(), Math.random()];
  return `rgba(${colors.map(c => (c * 127).toFixed()).join(',')}, 1)`;
};

export const color = (state = 'rgba(0, 0, 0, 1)', action) => {
  if (action.type === 'generate') {
    return getColor();
  }
  return state;
};

