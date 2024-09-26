//rafc
import React from "react";

//use selector hook is used to get hold of any state in store
//import useSelector
import { useSelector, useDispatch } from "react-redux";
// import actions
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  //accepts a function as a parameter recieving a redux state as its argument
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  //dispatch actions
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered(1));
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(2));
        }}
      >
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;
