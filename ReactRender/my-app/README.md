### ReactRender

## re-render

the `js <React.StrictMode></React.StrictMode>` renders a component twice during the development stage, that is why you might see something being consoled twice eg

```js
import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  console.log("logged");

  return (
    <div>
      <button onClick={() => setCount((value) => value + 1)}>
        count value {count}
      </button>
    </div>
  );
}

export default UseState;
```

**_NBthe logged is consoled twice_**

when we click the button the "logged" statement will also be rendered

## useState render

useState has 2 phases (render and commit phase)

when we click the setCount function is called flagging the UseState component requiring an update. React goes through the tree and sees that UseState needs an update. It uses the createElement() method to convert the JSX into react element. It compares the new render and previous render and commit changes to the DOM as updates

if we change a state to the same original value react might render only once but doesn't render again since the new and current state are equal(if there state change is equal it string it doesn't go thrrough the render phase). for example if we have a button that sets counter to zero ,when clicked for the first time if counter is not zero it will only render once and not again even if clicked multiple times. Else if it was zero it won't render at all

## useReducer render

it has similar characters to useState only difference is useState uses the set function while useReducer uses a dispatch function

## parent-child component render

when a parent renders, react recursively renders all te child components. Only when state doesn't change is when it will render the parent component only once but doesn't render the child component

## Avoid unnesseary render to child componet

unnessary render occurs when a chid goes through the render phase but not the commit phase, for example in a case where the parent component doesn't change state and thus it renders once.

```js
import React, { useState } from "react";
import ChildOne from "./ChildOne";

const ParentOne = () => {
  const [count, setCount] = useState(0);

  console.log("parent one");
  return (
    <div>
      <button onClick={() => setCount((num) => num + 1)}>
        count = {count}
      </button>
      <ChildOne />
    </div>
  );
};

export default ParentOne;
```

```js
import React from "react";

const ChildOne = () => {
  console.log("ChildOne render");
  return (
    <div>
      <p>Child one</p>
    </div>
  );
};

export default ChildOne;
```

```js
import "./App.css";
import ParentOne from "./components/optimization/ParentOne";
// import UseReducer from "./components/UseReducer/UseReducer";
//import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <ParentOne />
    </div>
  );
}

export default App;
```

unnessesary render occurs in the case above where the child component output is ignored since nothing had change from the previous render and desn't make it to the commit phase

to optimize the code we can do this

```js
import "./App.css";
import ChildOne from "./components/optimization/ChildOne";
import ParentOne from "./components/optimization/ParentOne";
// import UseReducer from "./components/UseReducer/UseReducer";
//import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
```

```js
import React, { useState } from "react";

const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("parent one");
  return (
    <div>
      <button onClick={() => setCount((num) => num + 1)}>
        count = {count}
      </button>
      {children}
    </div>
  );
};

export default ParentOne;
```

now the child component becomes more of a prop than a nested component

# causes of re-render

1. calling of setter or dispatch function
2. if the parent of a component renders

## React memo

it does a shalow comparison between previous and new prop, only re-rendering child if props have a changed
