//if wanna use more stores, then we need to combine them..
import { applyMiddleware, createStore } from "redux";

//state: the application state
const reducer = (state, action) => {
  switch (action.type) {
    case "INC": {
      return (state = +1);
    }
    case "E": {
      throw new Error("ouch");
    }
    default:
      return state;
  }
};
/*
//pass store, to function next to action
const logger = store => next => action => {
  console.log = ("action fired", action);
  next(action);
};
*/

const error = store => next => action => {
  try {
    console.log = ("action fired", action);
    next(action);
  } catch (e) {
    console.log = ("Error, ", e);
  }
};

const middleware = applyMiddleware(error);

const store = createStore(reducer, null, middleware);

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//this does nothing yet as nothing is listening
store.dispatch({ type: "INC", payload: {} });
store.dispatch({ type: "E" });
