import React, { useState } from "react";

const Counter = () => {
  //   const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter App using useState</h1>
      <div className="card">
        <div className="card-header">{counter}</div>
        <div className="card-body">
          <p className="card-text">using useState render numbers in the app</p>

          <button className="btn btn-primary" onClick={Increment}>
            Increment
          </button>
          <button className="btn btn-danger m-2" onClick={Decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
