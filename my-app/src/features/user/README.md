### Imports

```js
const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");
```

- **createSlice**: This function is used to easily create Redux slices (which combine reducers and action creators in one place).
- **createAsyncThunk**: This function helps create asynchronous actions (like fetching data from an API) and automatically generates action types **(pending, fulfilled, and rejected)** to handle different states of an async request.
- **axios**: A library to make HTTP requests (in this case, it's used to fetch user data from an API).

### initial states

```js
const initialState = {
  loading: false, // Indicates whether data is being fetched (true when fetching, false otherwise)
  users: [], // This will store the list of users fetched from the API
  error: "", // This will store any error message if the request fails
};
```

- This **initialState** object defines the default state of the user slice: no loading, an empty array for users, and an empty error message.

### Create Asynchronous Action (fetchUsers)

```js
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});
```

createAsyncThunk("user/fetchUsers", asyncFunction):

- The first argument, **"user/fetchUsers"**, is the action type.
- The second argument is an asynchronous function that makes a network request to fetch users.
- **axios.get** makes an HTTP request to the API **https://jsonplaceholder.typicode.com/users**.
- **.then(response)** processes the response data by extracting the **_id_** of each user (as an example).
- When you make an HTTP request using **_axios.get()_**, it returns a response object.

This function generates three action types:

- **fetchUsers.pending**: Dispatched when the request starts.
- **fetchUsers.fulfilled**: Dispatched when the request succeeds.
- **fetchUsers.rejected**: Dispatched when the request fails.

### Create Slice (userSlice)

```js
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
```

- **createSlice**: This is used to define the slice of the Redux store that will handle the user-related state and actions.
- **name: "user"**: This names the slice as "user".
- **initialState**: We use the initialState defined earlier as the default state for this slice.
- **extraReducers**: Since we are using asynchronous actions created with **createAsyncThunk**, we use extraReducers to handle different states (pending, fulfilled, rejected) of the fetchUsers action.

### Export the Reducer and the Async Action

```js
module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
```

- **userSlice.reducer**: The slice's reducer is exported to be used in the Redux store.
- **fetchUsers**: The asynchronous action is also exported so it can be dispatched in the application.
