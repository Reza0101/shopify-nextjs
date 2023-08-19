import "@/styles/globals.css";
import { CartContextProvider } from "@/context/cart";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100">
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </div>
  );
}
