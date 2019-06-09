import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducers";
import Counter from "./components/Counter";

const store = createStore(counter);
const root = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    root
  );

//Re-renders each time, just for sake of demo
render();
store.subscribe(render);
