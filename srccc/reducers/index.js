import { combineReducers } from "redux";

const initialState = {
  cakeNumber: 20,
  icecreamNumber: 20,
};
const cakeReducer = (state = initialState, action) => {
  if (action.type == "BUY_CAKE") {
    return { ...state, cakeNumber: state.cakeNumber - 1 };
  } else if (action.type == "SELL_CAKE") {
    return { ...state, cakeNumber: state.cakeNumber + 1 };
  }
  return state;
};

const icecreamReducer = (state = initialState, action) => {
  if (action.type == "BUY_ICECREAM") {
    return { ...state, icecreamNumber: state.icecreamNumber - 1 };
  } else if (action.type == "SELL_ICECREAM") {
    return { ...state, icecreamNumber: state.icecreamNumber + 1 };
  }
  return state;
};
export default combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
