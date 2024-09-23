//import the store
const store = require("./app/store");

//importing cake actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
//import ice actions
const iceActions = require("./features/icecream/iceCream").iceCreamActions;

//lets log our current state
console.log("initial state :", store.getState());

//lets subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

//lets dispatch
store.dispatch(cakeActions.ordered(6));
store.dispatch(cakeActions.restocked(16));
store.dispatch(iceActions.ordered(10));
store.dispatch(iceActions.ordered(15));

unsubscribe();
