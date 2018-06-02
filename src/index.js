//if wanna use more stores, then we need to combine them..
import { applyMiddleware, createStore } from "redux";

//state: the application state
const reducer = (state, action) => {
  switch (action.type) {
    case "INC": {
      return (state = +1);
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//this does nothing yet as nothing is listening
store.dispatch({ type: "INC" });
