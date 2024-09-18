//import redux
const redux = require("redux");

//let us create a store to carry our current state
const createStore = redux.createStore;
//bind action creators
const bindActionCreators = redux.bindActionCreators;
//combine reducers
const combineReducer = redux.combineReducers;

//actions
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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
const order_icecream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};
const restock_icecream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

//current state
// const initialState = {
//   numberOfCakes: 20,
//   numberOfIceCreams: 30,
// };
const initialCakeState = {
  numberOfCakes: 20,
};

const initialIceCreamState = {
  numberOfIceCreams: 40,
};

//reducer
const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const CakeReducer = (state = initialCakeState, action) => {
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

//combine reducers
const rootReducer = redux.combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
});

const store = createStore(rootReducer);

//display current state
console.log("current state ------", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state ------", store.getState())
);
// store.dispatch(order_cake(3));
// store.dispatch(order_cake(4));
// store.dispatch(order_cake(2));

//use bind action creators instead
const actions = bindActionCreators(
  { order_cake, restockCake, order_icecream, restock_icecream },
  store.dispatch
);

actions.order_cake(3);
actions.order_cake(9);
actions.order_cake(2);

//restock cake
console.log("------------------restock-----------------");
const numRestock = 10;
console.log("current stock ", store.getState());
console.log("Restock: ", numRestock);
// store.dispatch(restockCake(numRestock));
actions.restockCake(numRestock);
console.log("-----------------------icecream-----------");
actions.order_icecream(2);
actions.restock_icecream(4);

unsubscribe();
