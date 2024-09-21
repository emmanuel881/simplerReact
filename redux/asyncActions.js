const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default; // Correct import

console.log(typeof thunkMiddleware); // Should print "function"

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Actions
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED"; // Fix typo
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

// Action creators
const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
const fetchUserSucceeded = (users) => ({
  type: FETCH_USER_SUCCEEDED,
  payload: users,
});
const fetchUserFailed = (error) => ({
  type: FETCH_USER_FAILED,
  payload: error,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCEEDED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USER_FAILED:
      return { loading: false, users: [], error: action.payload };
    default:
      return state; // Always return state
  }
};

// Async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

// Create store with middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
