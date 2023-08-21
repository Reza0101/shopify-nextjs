import Head from "next/head";
import Link from "next/link";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cart";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  title: string;
};
function Layout({ children, title }: Props) {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const [cartItemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    setItemsCount(
      cart.cartItems.reduce((acc: any, cur: any) => acc + cur.qty, 0)
    );
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex bg-white h-12 px-8 justify-between items-center border-b-2">
            <Link href="/">
              <p className="text-lg font-bold">Shopping</p>
            </Link>
            <div className="flex font-bold">
              <Link href="/cart">
                <div className="p-2">
                  <p>Cart</p>
                  {cart.cartItems && (
                    <p className="ml-1 rounded-xl bg-gray-200 px-2 py-1">
                      {cartItemsCount ? cartItemsCount : ""}
                    </p>
                  )}
                </div>
              </Link>
              <Link href="/login">
                <p className="p-2">Login</p>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10">
          footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
