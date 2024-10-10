import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//layouts
import RootLayout from "./Layouts/RootLayout";

//pages
import Home from "./pages/Home";
import Clients, { clientLoader } from "./pages/Clients";
import RQClients from "./pages/RQClients";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="clients" element={<Clients />} loader={clientLoader} />
      <Route path="rqClients" element={<RQClients />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
