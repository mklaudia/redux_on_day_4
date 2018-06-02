import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  posts: [],
  err: null
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "FETCH_POSTS_PENDING":
      return {
        ...state,
        fetching: true
      };

    case "FETCH_POSTS_REJECTED":
      return { ...state, fetching: false, err: action.payload };

    case "FETCH_POSTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload.data
      };
  }
  return state;
};

const middleware = applyMiddleware(thunk, promise());

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
});

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_POSTS_PENDING" });
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      dispatch({ type: "FETCH_POSTS_FULFILLED", payload: response.data });
    })
    .catch(error => {
      dispatch({ type: "FETCH_POSTS_REJECTED", payload: error });
    });
});

store.dispatch({
  type: "FETCH_POSTS",
  payload: axios.get("https://jsonplaceholder.typicode.com/posts")
});
