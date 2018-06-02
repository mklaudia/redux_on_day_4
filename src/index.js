import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  posts: [],
  err: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_PENDING":
      return { ...state, fetching: true };
  }
  console.log(action.type);
  return state;
};

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
});

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_POSTS_PENDING" });
  //do sg this is synchronous
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(respone => {
      dispatch({ type: "FETCH_POSTS_FILTERED" });
    })
    .catch(error => {
      dispatch({ type: "FETCH_POSTS_REJECTED" });
    });
  dispatch({ type: "END" });
});
