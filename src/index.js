//if wanna use more stores, then we need to combine them..
import { combineReducers, createStore } from "redux";

const initialState = {
  user: null,
  tweets: []
};

//state: the application state
const userReducer = function(state = initialState.user, action) {
  switch (action.type) {
    case "CHANGE_NAME": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
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

//this does nothing yet as nothing is listening
store.dispatch({ type: "CHANGE_NAME", payload: { user: "Adam" } });
