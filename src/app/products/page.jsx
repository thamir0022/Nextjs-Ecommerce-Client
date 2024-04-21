import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllProducts from "../../components/AllProducts";
import { dbConnect } from "../../lib/db.js";
import { Product } from "../../models/product.js";
import BackToTop from "@/components/BackToTop";

export default async function page() {
  await dbConnect();
  const allProducts = await getAllProducts();
  return (
    <>
      <Header />
      <AllProducts products={allProducts || null}/>
      <BackToTop />
      <Footer />
    </>
  );
}

const getAllProducts = async () => {
  try {
    const products = await Product.find().sort({ updatedAt: -1 }).lean();
    return JSON.parse(JSON.stringify(products)) || null;
  } catch (error) {
    return { error: error.message };
  }
};
