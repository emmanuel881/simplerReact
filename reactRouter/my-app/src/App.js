import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Statistics from "./components/Statistics";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Career, { careersLoader } from "./pages/careers/Career";

// Import layouts
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />

        {/* HELP routes */}
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* career routes*/}
        <Route path="careers" element={<CareersLayout />}>
          <Route index element={<Career />} loader={careersLoader} />
        </Route>
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
