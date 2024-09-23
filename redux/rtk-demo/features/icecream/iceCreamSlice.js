//importing actions
const { cakeActions } = require("../cake/cakeSlice");

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
  //reduce icream as customer purchase cake(offer)
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcream--;
    });
  },
});

//export reducer
module.exports = iceCreamSlice.reducer;
//export action creators
module.exports.iceCreamActions = iceCreamSlice.actions;
