### Learning hooks

## useState Hook

it enable us to render changes on variables being rendered on the page

## useReducer Hook

it works in a similar way as useState hook. Difference is it takes multiple functionalities
where we can dispatch based on the action.

## useEffect Hook

with useEffect we are able to run a block of code when the page is rendered. We also have the freedom to pass varios states in the app that will be runned if any changes occur to them

## useRef

it enables us to directly manipulate the DOM

## useLayoutEffect

its similar to useEffect , its called ealier than useEffect

## useImperativeHandle

it helps us create a parent child relation by customizing handle
exposed as **ref**

## useContext

used to manage global states

- create context(make sure to export it)
- wrap tree,... context.Provider where we use `js value={}` to pass in states and fuctions we want go let them have a global spectrum.Rap a root from root component
- import useContext in the place we want the global state
- import the created context
- use useContext to grab the states we need from the context we created

## useMemo

## useCallback
