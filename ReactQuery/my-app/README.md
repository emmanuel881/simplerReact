### React-Query

we install it buy running the command

`npm install react-query`

we then import **QueryClientProvider** and **QueryClient** from **_react-query_**

we then wrap our root app component with

```js
<QueryClientProvider></QueryClientProvider>
```

create an instance of QueryClient

## DevTools

access the dev tools

```js
import { ReactQueryDevtools } from "react-query/devtools";
```

# polling

in a site eg prices that constantly change we can use

```js
refetchInterval: "time in miliseconds";
```

that is passed as the third argument in useQuery() this will refreash data depending on time specified.

```js
refetchIntervalInBackground: "boolean value";
```

enables the refetch to occur even when window is not on focus.

## Allow fetch only when user clicks

we do this by adding

```js
enabled: false;
```

to the third object argument of the useQuery() function

**useQuery** has function named _refetch_ ,... we can enable the fetch action by passing the refetch function on to onClick event handler eg

```js
<button onClick={refetch}>Refresh content</button>
```

## Executing functions after fetching data

we can do this by first defining the fuction eg

```js
//when it succeds
const successMesg = (data) => {
  console.log("success", data);
};
//when it fails
const errorWhenFetching = (error) => {
  //we have access to the error property
  console.log("failed", error);
};
```

we can pass this function to the third object arg of useQuery() with a property value of onSuccess to run once the fetch is successful. Same case when it fails, only this time we us the onError property

```js
const { data, isLoading, error } = useQuery(
  "RQClientQuery",
  () => axios.get("http://localhost:4000/Dreamcars").then((res) => res.data),
  { onSuccess: successMesg, onError: errorWhenFetching }
);
```

## Data transformation

we can use the

```js
select: //some function()
```

on the third useQuery argment to tensform our data

## custom hooks

we can create our own custom hook handle useQuery

```js
import axios from "axios";
import { useQuery } from "react-query";

const fetctData = () =>
  axios.get("http://localhost:4000/Dreamcar").then((res) => res.data);

export const useClienHook = (onSuccess, onError) => {
  return useQuery("RQClientQuery", fetctData, { onSuccess, onError });
};
```

now we can call the hook

```js
const { data, isLoading, error } = useClienHook(successMesg, errorWhenFetching);
```

**NB:** _remember to import it_
