import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Products } from "./Pages/Products";
import { Product } from "./Pages/Product";
import { Layout } from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/{id}" element={<Product />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router} />;

export default App;
