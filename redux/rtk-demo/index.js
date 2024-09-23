//import the store
const store = require("./app/store");

//importing cake actions
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
//import ice actions
const iceActions = require("./features/icecream/iceCreamSlice").iceCreamActions;

//import user actions
const fetchUsers = require("./features/user/userSlice").fetchUsers;

//lets log our current state
console.log("initial state :", store.getState());

//lets subscribe
const unsubscribe = store.subscribe(() => {});

//lets dispatch
store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered(6));
// store.dispatch(cakeActions.restocked(16));
// store.dispatch(iceActions.ordered(10));
// store.dispatch(iceActions.restocked(15));

//unsubscribe();
