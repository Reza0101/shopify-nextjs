import Layout from "@/components/Layout";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Cart = () => {

  const router = useRouter()

  const { state, dispatch } = useContext(CartContext);

  const {
    cart: { cartItems },
  } = state;

  const remoreHandler = (item: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {!cartItems.length ? (
        <div>Cart is empty.</div>
      ) : (
        <>
          <div className="container my-5 overflow-scroll">
            <div className="flex justify-evenly p-1 w-[700px] mx-auto">
              <p className="w-[50px] text-center">Item</p>
              <p className="w-[50px] text-center">Quantity</p>
              <p className="w-[50px] text-center">Image</p>
              <p className="w-[50px] text-center">Price</p>
              <p className="w-[50px] text-center">Action</p>
            </div>
            <div className="">
              {cartItems.map((item: any) => (
                <div className="flex p-1 w-[700px] mx-auto items-center justify-evenly">
                  <p className="w-[50px] text-center">{item.title}</p>
                  <p className="w-[50px] text-center">{item.qty}</p>
                  <img
                    className="rounded-lg w-[50px] text-center"
                    src={item.image}
                  />
                  <p className="w-[50px] text-center">{item.price}$</p>
                  <button
                    className="w-[50px] text-center"
                    onClick={() => remoreHandler(item)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="font-bold">
              Total Price:
              {cartItems.reduce(
                (acc: any, cur: any) => acc + cur.qty * cur.price,
                0
              )}
            </div>
            <div className="font-bold">
              <button onClick={() => router.push('/')} className="rounded-xl bg-gray-700 text-white px-4 py-2">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Cart), {ssr: false});
