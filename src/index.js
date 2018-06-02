import { createStore } from "redux";

//state: the application state
const reducer = function(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state + 1;
  }
  return state;
};

const store = createStore(reducer, 0); //0 is the inital state

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//this is
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
