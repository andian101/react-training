import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "./state";
import { Landing } from "./Pages/Landing";
import { Products } from "./Pages/Products";
import { Product } from "./Pages/Product";
import { Contact } from "./Pages/Contact";
import { Cart } from "./Pages/Cart";
import { Layout } from "./components/Layout";
import { CartContext, initialState } from "./state";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default App;
