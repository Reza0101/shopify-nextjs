import { createContext, useReducer } from "react";

const initialState = {
  cart: { cartItems: [] },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item: any) => item.slug !== action.payload.slug
      );

      return {...state, cart: {...state.cart, cartItems}}
    }
    case "ADD_ITEM": {
      const newItem: any = action.payload;

      const existingItem = state.cart.cartItems.find(
        (item: any) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cart.cartItems.map((item: any) =>
            item.title === existingItem.title ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};

export let CartContext = createContext<any>([]);

export const CartContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
