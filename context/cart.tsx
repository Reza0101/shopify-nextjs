import { createContext, useReducer } from "react";

interface iAction {
  type: string;
  payload: {};
}

const initialState = {
  cart: { cartItems: [] },
};

const reducer = (state: any, action: iAction) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      const newItem: any = action.payload;

      const existingItem = state.cart.cartItems.find(
        (item: any) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cart.cartItems.map((item: any) =>
            item.title === existingItem.title ? newItem : item
          )
        : [...state.cart.cartItem, newItem];

        return {...state, cart: { ...state.cart, cartItems }}
    }
    default : 
        return state
  }
};

export let CartContext = createContext<any>([]);



export const CartContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {state , dispatch}

    return <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
}
 
