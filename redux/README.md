# Redux Crash Course

## core consepts in redux

The 3 main consepts in react are

- Store: Hold state of an application
- Action: what happend.(**_doesn't describe how state changes_**)
- Reducer: what ties store and action together

## Responsibilities of store

- hold the app state._form the index.js file_

```
const store = createStore(reducer);
```

- Allow access to state via `getState()`
  from index.js file

```
console.log("current state ------", store.getState());
```

- Request listners using `subscribe()`

```
const unsubscribe = store.subscribe(() =>
console.log("update state ------", store.getState()));
```

- on subscibing we can listen to changes based on cases
- Allow state to be dispatched.

```
store.dispatch(order_cake());
store.dispatch(order_cake());
store.dispatch(order_cake());
```

- We can unsubscribe and stop listenning any changes made will nolonger be rendered

`unsubscribe();`

## major steps in redux store

1. Create store
2. Define initial state and reducer
3. Define action and action creators
4. Subscibe to the store
5. Dispatch action
6. Unsubscribe
