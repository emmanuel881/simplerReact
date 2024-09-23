//import createslice
const createSlice = require("@reduxjs/toolkit").createSlice;

//define the initial state
const initialState = {
  numberOfIcream: 40,
};

//use createSlice
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIcream -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfIcream += action.payload;
    },
  },
});

//export reducer
module.exports = iceCreamSlice.reducer;
//export action creators
module.exports.iceCreamActions = iceCreamSlice.actions;
