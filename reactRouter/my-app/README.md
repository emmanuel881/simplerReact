### learning React router

## Browser router

it wraps the entire app allowing us to do routing

## Routes, Route.

enable routing

## Link

enable linking

## NavLink

This is similar to a regular `html<a>` tag, but it's specifically designed for navigation within React Router. It has active state management, meaning it will automatically add an "active" class to the link that matches the current route as compared to **Link**

## createBrowserRouter

This creates a router object that React Router will use to handle route changes. It's an alternative to wrapping your app in `js<BrowserRouter>`. It's more flexible for more advanced setups.

## createRoutesFromElements

This function allows us to define routes using JSX syntax. It's used here to define our route structure.

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayout}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Route>
  )
);
```

**Route path="/" element={RootLayout}**: This defines the root route (/), and the component rendered at this route will be RootLayout. The RootLayout component is your main layout that wraps all routes under it

```js
function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

**RouterProvider**: This is used to provide the router configuration to your app. It uses the router created with createBrowserRouter.

## RootLayout.js

This is your layout component that wraps the main content of the page. It's used to include shared elements like the navigation bar and any other components that are common across different pages.

```js
import { Outlet } from "react-router-dom";
```

**Outlet**: This is a special component provided by react-router-dom. It serves as a placeholder for rendering the matching child route’s element. So, when a user navigates to /about, the AboutUs component will be rendered where `js<Outlet />` is.

## JSON_server

I am using a JSON-server to load my files from my db file
We have to install it to use it. We use the command

`npm install json-server`

we can use it by running the command

`json-server -p  PORT_NUMBER -w PATH`

## useErrorRoute

## useLocation

learnt it can be used to make breadcrumbs

## <outlet />

this acts as a placeholder for components 
