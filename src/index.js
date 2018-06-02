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
    case "FETCH_POSTS_REJECTED":
      return { ...state, fetching: false, err: action.payload };
    case "FETCH_POSTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload
      };
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
      dispatch({ type: "FETCH_POSTS_FULFILLED", payload: response.data() });
    })
    .catch(error => {
      dispatch({ type: "FETCH_POSTS_REJECTED", payload: error });
    });
  dispatch({ type: "END" });
});
