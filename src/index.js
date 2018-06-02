import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const reducer = (state, action) => {
  console.log(action.type);
  return state;
};

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, null, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
});

store.dispatch(dispatch => {
  dispatch({ type: "START" });
  //do sg this is synchronous
  //axion.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({ type: "END" });
});
