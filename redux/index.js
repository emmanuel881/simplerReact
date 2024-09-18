//import redux
const redux = require("redux");

//let us create a store to carry our current state
const createStore = redux.createStore;

//actions
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

//action creators
const order_cake = (qty = 1) => {
  return {
    type: BUY_CAKE,
    payload: qty,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
};

//current state
const initialState = {
  numberOfCakes: 20,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

//display current state
console.log("current state ------", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state ------", store.getState())
);
store.dispatch(order_cake(3));
store.dispatch(order_cake(4));
store.dispatch(order_cake(2));

//restock cake
console.log("------------------restock-----------------");
const numRestock = 5;
console.log("current stock ", store.getState());
console.log("Restock: ", numRestock);
store.dispatch(restockCake(numRestock));

unsubscribe();
