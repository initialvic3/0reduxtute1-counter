import React from "react";

interface CounterProps {
  value: number;
  onIncrement: any;
  onDecrement: any;
}

const Counter: React.FC<CounterProps> = function({
  value,
  onDecrement,
  onIncrement,
}) {
  function incrementIfOdd() {
    if (value % 2 !== 0) {
      onIncrement();
    }
  }

  function incrementAsync() {
    setTimeout(onIncrement, 1000);
  }

  return (
    <p>
      Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>{" "}
      <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  );
};
export default Counter;
