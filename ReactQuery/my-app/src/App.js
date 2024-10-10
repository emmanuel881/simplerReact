import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
import ClientLayout from "./Layouts/ClientLayout";
import PageNotFound from "./pages/PageNotFound";
import ClientDetails from "./pages/ClientDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="clients" element={<Clients />} loader={clientLoader} />
      <Route path="rqClients" element={<ClientLayout />}>
        <Route index element={<RQClients />} />
        <Route path=":id" element={<ClientDetails />} />
      </Route>
      <Route path="*" element=<PageNotFound /> />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
