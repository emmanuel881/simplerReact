// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOdered } from "../cake/cakeSlice";
//importing actions
//const { cakeActions } = require("../cake/cakeSlice");

//import createslice

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
    builder.addCase(cakeOdered, (state) => {
      state.numberOfIcream--;
    });
  },
});

//export reducer
export default iceCreamSlice.reducer;
//export action creators
export const { ordered, restocked } = iceCreamSlice.actions;
