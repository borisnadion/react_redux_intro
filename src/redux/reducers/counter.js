export const counter = (state = 0, action) => {
  if (action.type === 'increment') {
    return state + action.value;
  }
  return state;
};
