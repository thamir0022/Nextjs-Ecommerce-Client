"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function FeaturedProduct({ product }) {
  return (
    <div className="bg-[#222] p-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full my-auto md:w-2/5">
          <h1 className="text-5xl text-white">{product?.title}</h1>
          <p className="pt-5 text-[#aaa]">{product?.description}</p>
          <div className="flex flex-wrap justify-evenly mt-5">
            <Link href={`/product/${product._id}`} className="btn-ani inline-flex gap-2 button">
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <button className="btn-ani inline-flex gap-2 button">
              <ShoppingCartOutlinedIcon/>
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <Image
            className="max-h-full max-w-full mx-auto rounded-lg"
            height={150}
            width={500}
            quality={100}
            src={
              product?.images
                ? product.images[0]
                : ""
            }
            alt={product?.title || ""}
          />
        </div>
      </div>
    </div>
  );
}
