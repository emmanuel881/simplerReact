import React, { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "incre":
      return state + 1;
    case "decre":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  console.log("Reducer");
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("incre")}>Increase</button>
      <button onClick={() => dispatch("decre")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer;
