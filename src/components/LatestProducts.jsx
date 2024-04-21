"use client";

import React from "react";
import Product from "./ProductBox";

export default function LatestProducts({ latestProducts }) {
  return (
    <div className="bg-gray-200 p-5">
      <h2 className="text-3xl font-bold text-center mb-5 font-[Poppins]">
        New Arrivals
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {latestProducts?.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </div>
  );
}
