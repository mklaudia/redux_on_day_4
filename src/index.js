//if wanna use more stores, then we need to combine them..
import { combineReducers, createStore } from "redux";

const initialState = {
  user: null,
  tweets: []
};

//state: the application state
const userReducer = function(state = initialState.user, action) {
  //inital state is a must
  return state;
};
const tweetsReducer = function(state = initialState.tweets, action) {
  return state;
};

//combine them
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//this is
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 5 });
store.dispatch({ type: "INC", payload: 200 });
store.dispatch({ type: "DEC", payload: -3 });
