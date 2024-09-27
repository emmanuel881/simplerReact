import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, result: state.a + state.b };
    case "SUB":
      return { ...state, result: state.a - state.b };
    case "MULT":
      return { ...state, result: state.a * state.b };
    case "SET_A":
      return { ...state, a: action.payload };
    case "SET_B":
      return { ...state, b: action.payload };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, {
    a: 0,
    b: 0,
    result: 0,
  });
  return (
    <div>
      <h1>Calculator using useReducer</h1>
      <div className="mb-3">
        <label htmlFor="inputA" className="form-label">
          A
        </label>
        <input
          type="number"
          //value={state.a}
          onChange={(e) =>
            dispatch({
              type: "SET_A",
              payload: e.target.value ? parseFloat(e.target.value) : 0,
            })
          }
          className="form-control text-center fw-bold"
          id="inputA"
          placeholder="enter the first number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputB" className="form-label">
          B
        </label>
        <input
          type="number"
          //value={state.b}
          onChange={(e) =>
            dispatch({
              type: "SET_B",
              payload: e.target.value ? parseFloat(e.target.value) : 0,
            })
          }
          className="form-control text-center fw-bold"
          id="inputB"
          placeholder="enter the second number"
        />
      </div>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "ADD" })}
      >
        Add
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "SUB" })}
      >
        Sub
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "MULT" })}
      >
        Mult
      </button>
      <h2>Result : {state.result}</h2>
    </div>
  );
};

export default Calculator;
