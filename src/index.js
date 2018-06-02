import { createStore } from "redux";

//state: the application state
const reducer = function(state, action) {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state + action.payload;
  }
  return state;
};

const store = createStore(reducer, 0); //0 is the inital state

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//this is
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "DEC", payload: -3 });
