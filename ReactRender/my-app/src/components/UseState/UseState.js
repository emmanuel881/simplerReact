import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  console.log("logged");

  return (
    <div>
      <button onClick={() => setCount((value) => value + 1)}>
        count value {count}
      </button>
      <button onClick={() => setCount((value) => (value = 0))}>
        set to zero
      </button>
      <button onClick={() => setCount((value) => (value = 5))}>set to 5</button>
    </div>
  );
}

export default UseState;
