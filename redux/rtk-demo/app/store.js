const configureStore = require("@reduxjs/toolkit").configureStore;
//import reducer
const CakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice");

//import logger middleware
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

//similar to creating rootReducer in our previous redux expo
const store = configureStore({
  reducer: {
    cake: CakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(logger),
});

//export the store
module.exports = store;
