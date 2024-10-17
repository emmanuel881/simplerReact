import React, { useRef, useState } from "react";

const ChangName = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("John Doe");

  const changeName = () => {
    setName(inputRef.current.value);
  };
  return (
    <div>
      <h1>Change name using useRef</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          My name is:{name}
        </label>
        <input
          type="email"
          className="form-control text-center"
          id="name"
          placeholder="submit to modify the name"
          ref={inputRef}
        />
        <button className="btn btn-primary m-2" onClick={changeName}>
          Sub
        </button>
      </div>
    </div>
  );
};

export default ChangName;
