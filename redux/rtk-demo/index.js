//import the store
const store = require("./app/store");

//importing cake actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

//lets log our current state
console.log("initial state :", store.getState());

//lets subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

//lets dispatch
store.dispatch(cakeActions.ordered(6));
store.dispatch(cakeActions.restocked(16));

unsubscribe();
