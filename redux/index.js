//import redux
const redux = require("redux");

//let us create a store to carry our current state
const createStore = redux.createStore;

//action
const BUY_CAKE = "BUY_CAKE";

//action creator
const order_cake = () => {
  return {
    type: BUY_CAKE,
    quantity: 1,
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
        numberOfCakes: state.numberOfCakes - 1,
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
store.dispatch(order_cake());
store.dispatch(order_cake());
store.dispatch(order_cake());

unsubscribe();
