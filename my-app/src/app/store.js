// const configureStore = require("@reduxjs/toolkit").configureStore;
import { configureStore } from "@reduxjs/toolkit";
//import reducer
// const CakeReducer = require("../features/cake/cakeSlice");
import CakeReducer from "../features/cake/cakeSlice";
// const icecreamReducer = require("../features/icecream/iceCreamSlice");
import icecreamReducer from "../features/icecream/iceCreamSlice";

//async redux
// const userReducer = require("../features/user/userSlice");
import userReducer from "../features/user/userSlice";

//import logger middleware
// const reduxLogger = require("redux-logger");
import { createLogger } from "redux-logger";

const logger = createLogger();

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
export default store;
