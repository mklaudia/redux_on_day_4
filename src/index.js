import { applyMiddleware, createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
  }
  return state;
};

const overWriter = store => next => action => {
  action.payload = 1;
  next(action);
};

const middleware = applyMiddleware(overWriter);

const store = createStore(reducer, null, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
});

store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 2 });
