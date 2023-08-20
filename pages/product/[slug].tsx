import Layout from "@/components/Layout";
import productData from "../../data/products.json";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const ProductPage = () => {
  const route = useRouter();
  const { state, dispatch } = useContext(CartContext);

  const { query } = useRouter();
  const { slug } = query;

  const product = productData.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found🤦‍♂️</div>;
  }

  const addToCartHandler = () => {
    const existingItem = state.cart.cartItems.find(
      (item: any) => item.slug === product.slug
    );

    const qty = existingItem ? existingItem.qty + 1 : 1;

    if (product.count < qty) {
      return true;
    }

    dispatch({ type: "ADD_ITEM", payload: { ...product, qty } });


    route.push("/cart");
  };

  return (
    <Layout title={`${product.title}`}>
      <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
        <div className="md:cols-span-2">
          <img
            alt="Product Image"
            className="rounded-xl"
            src={`${product.image}`}
            width={340}
            height={340}
          />
        </div>
        <div className="text-lg">
          <h2>{product.title}</h2>
          <p>{product.cat}</p>
          <p>{product.description}</p>
        </div>
        <div className="p-5">
          <div className="mb-2 flex justify-between">
            <div>price:</div>
            <div>{product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status:</div>
            <div>{product.count ? "Availabe" : "Unavanalible"}</div>
          </div>
          <button
            onClick={addToCartHandler}
            className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default ProductPage;
