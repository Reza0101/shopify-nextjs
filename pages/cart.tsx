import Layout from "@/components/Layout";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const { cart: {cartItems} } = state;

  console.log(cartItems);

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {!!cartItems.length ? (
        <div>Cart is not empty.</div>
      ) : (
        <div>Cart is empty.</div>
      )}
    </Layout>
  );
};

export default Cart;
