import React, { useState } from "react";
//import useSelect
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [valueO, setValueO] = useState(1);
  const [valueR, setValueR] = useState(1);
  const numberOfIceCream = useSelector(
    (state) => state.icecream.numberOfIcream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of iceCream - {numberOfIceCream}</h2>
      <input
        type="number"
        value={valueO}
        onChange={(e) => setValueO(parseInt(e.target.value))}
        placeholder="enter numer to order"
      />
      <button
        onClick={() => {
          dispatch(ordered(valueO));
        }}
      >
        Order {valueO} iceCream
      </button>
      <input
        type="number"
        value={valueR}
        onChange={(e) => setValueR(parseInt(e.target.value))}
        placeholder="enter numer to restock"
      />
      <button
        onClick={() => {
          dispatch(restocked(valueR));
        }}
      >
        Restock {valueR}
      </button>
    </div>
  );
};

export default IceCreamView;
