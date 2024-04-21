"use client";

import React from "react";
import Product from "./ProductBox";

export default function LatestProducts({ products }) {
  return (
    <div className="h-fit w-screen mb-10">
      <h2 className="my-8 text-3xl text-center font-semibold font-[Poppins]">
        All Products
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {products.length > 0 &&
          products?.map((product, i) => <Product key={i} {...product} />)}
      </div>
    </div>
  );
}
