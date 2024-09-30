import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import NavBar from "./components/NavBar";

//import layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Route>
  )
);

function App() {
  return (
    // <BrowserRouter>
    // <NavBar />
    <RouterProvider router={router} />
    // </BrowserRouter>
  );
}

export default App;
