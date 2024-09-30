import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Statistics from "./components/Statistics";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";

// Import layouts
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin routes that doesn't have the navBar component*/}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Statistics />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
