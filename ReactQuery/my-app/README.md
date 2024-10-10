### React-Query

we install it buy running the command

`npm install react-query`

we then import **QueryClientProvider** and **QueryClient** from **_react-query_**

we then wrap our root app component with

`js<QueryClientProvider></QueryClientProvider>`

create an instance of QueryClient

## DevTools

access the dev tools

`js
 import { ReactQueryDevtools } from "react-query/devtools";
 `

# polling

in a site eg prices that constantly change we can use
`js refetchInterval: "time in milisecons"`
that is passed as the third argument in useQuery() this will refreash data depending on time specified.

`js
 refetchIntervalInBackground: "boolean value"
 `
enables the refetch to occur even when window is not on focus.

## Allow fetch only when user clicks

we do this by adding
`js
 enabled: false
 `
to the third object argument of the useQuery() function

**useQuery** has function named _refetch_ ,... we can enable the fetch action by passing the refetch function on to onClick event handler eg

```js
<button onClick={refetch}>Refresh content</button>
```
