const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "SUCCESS":
      return action.data;
    case "FAIL":
      return {};
    default:
      return state;
  }
};

export default weatherReducer;
