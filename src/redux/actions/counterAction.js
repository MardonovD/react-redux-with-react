export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
export const resetAction = () => {
  return {
    type: RESET,
  };
};
