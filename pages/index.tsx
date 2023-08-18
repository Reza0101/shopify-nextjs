import React from "react";
import Layout from "../components/Layout";
import Product from "@/components/Product";
import productData from "../data/products.json";

const Home = () => {
  return (
    <>
      <Layout title="Home Page">
        <div className="flex gap-5">
          {productData.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
