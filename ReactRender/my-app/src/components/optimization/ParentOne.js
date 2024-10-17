import React, { useState } from "react";

const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("parent one");
  return (
    <div>
      <button onClick={() => setCount((num) => num + 1)}>
        count = {count}
      </button>
      {children}
    </div>
  );
};

export default ParentOne;
