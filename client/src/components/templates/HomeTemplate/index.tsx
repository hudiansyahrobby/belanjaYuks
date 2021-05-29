import React from "react";
import Layout from "../../atoms/Layout";
import BestProductList from "../../organisms/BestProductList";
import CategoryList from "../../organisms/CategoryList";
import Hero from "../../organisms/Hero";
import ProductList from "../../organisms/ProductList";
import ShopList from "../../organisms/ShopList";

const HomeTemplate = () => {
  return (
    <Layout>
      <Hero />
      <CategoryList />
      <BestProductList />
      <ShopList />
      <ProductList />
    </Layout>
  );
};

export default HomeTemplate;
