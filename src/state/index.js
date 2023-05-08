import { createContext } from "react";
import { data } from "../data/data";

export const initialState = {
  cartItems: [data[0]],
};

export function reducer(state, action) {
  if (action.type === "ADD") {
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
  }

  if (action.type === "REMOVE") {
    const cartItems = state.cartItems.filter((f) => f.id !== action.payload.id);
    return {
      ...state,
      cartItems,
    };
  }

  throw Error("Unknown action.");
}

export const CartContext = createContext(null);
