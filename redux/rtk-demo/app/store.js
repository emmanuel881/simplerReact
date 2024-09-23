const configureStore = require("@reduxjs/toolkit").configureStore;
//import reducer
const CakeReducer = require("../features/cake/cakeSlice");

//similar to creating rootReducer in our previous redux expo
const store = configureStore({
  reducer: {
    cake: CakeReducer,
  },
});

//export the store
module.exports = store;
