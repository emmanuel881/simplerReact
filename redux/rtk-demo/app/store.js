const configureStore = require("@reduxjs/toolkit").configureStore;
//import reducer
const CakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCream");

//similar to creating rootReducer in our previous redux expo
const store = configureStore({
  reducer: {
    cake: CakeReducer,
    icecream: icecreamReducer,
  },
});

//export the store
module.exports = store;
