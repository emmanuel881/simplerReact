const configureStore = require("@reduxjs/toolkit").configureStore;
//import reducer
const CakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice");

//async redux
const userReducer = require("../features/user/userSlice");

//import logger middleware
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

//similar to creating rootReducer in our previous redux expo
const store = configureStore({
  reducer: {
    cake: CakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(logger),
});

//export the store
module.exports = store;
