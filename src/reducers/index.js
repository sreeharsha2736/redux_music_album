import { combineReducers } from "redux";

const initialState = {
  numberOfCakes: 20,
  numberOfIcecreams: 20,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type == "BUY_CAKE") {
    return { ...state, numberOfCakes: state.numberOfCakes - 1 };
  }
  return state;
};

const icecreamReducer = (state = initialState, action) => {
  if (action.type == "BUY_ICECREAM") {
    return { ...state, numberOfIcecreams: state.numberOfIcecreams - 1 };
  }
  return state;
};

export default combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
