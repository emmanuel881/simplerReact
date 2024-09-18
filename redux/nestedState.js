const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

//using immer to modify reducers
const produce = require("immer").produce;

//initial state
const initialState = {
  name: "Henry",
  address: {
    street: "hot 23",
    city: "Boston",
    state: "Klvalley",
  },
};

//action
const CHANGE_STREET = "CHANGE_STREET";

//action creator
const updateStreet = (street = "Toms") => {
  return {
    type: CHANGE_STREET,
    payload: street,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STREET:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      //using immer
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

//createStore
const store = createStore(reducer);

//subsscribe
const unsubscribe = store.subscribe(() =>
  console.log("updated state ---------", store.getState())
);

const actions = bindActionCreators({ updateStreet }, store.dispatch);

actions.updateStreet("Kimberly");

unsubscribe();
