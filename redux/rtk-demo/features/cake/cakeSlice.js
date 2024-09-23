//require redux tool kit
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 20,
};

//we specify 3 properties
//1Name
//2 inital state
//3 reducers
//it automatically create action creators with the name used for reducers functions
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
