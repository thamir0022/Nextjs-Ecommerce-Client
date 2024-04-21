"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Tooltip, Zoom } from "@mui/material";
import { CartContext } from "@/components/CartContext";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const params = useParams();
  const productId = params.productId;
  const { addToCart } = useContext(CartContext);
  console.log(productId);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: productId }),
        });
        if (res.ok) {
          const data = await res.json();
          setProduct(data.products[0]);
          setLoading(false);
        } else {
          setLoading(false);
          throw new Error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = (id) => {
    addToCart(id);
    setAddingToCart(true);
    setTimeout(() => {
      setAddingToCart(false);
    }, 1000); // 1000 milliseconds = 1 second
  };

  console.log(product);
  return (
    <>
      <Header />
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="min-h-screen w-screen">
          {product ? (
            <div className="m-10 flex gap-20">
              <Carousel images={product?.images} />
              <div className="flex flex-col gap-10 my-10">
                <h2 className="text-3xl montserrat">{product.title}</h2>
                <p className="text-xl poppins">{product.description}</p>
                <div className="flex gap-3">
                  <p className="text-xl my-auto roboto-medium">
                    {product.price?.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="btn-ani-1"
                  >
                    {addingToCart ? (
                      "Added to cart"
                    ) : (
                      <>
                        <ShoppingCartOutlinedIcon /> Add to cart
                      </>
                    )}
                  </button>
                </div>
                <Tooltip
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 300 }}
                  className="heart-container"
                  title={"Add to favorites"}
                >
                  <div className="">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="Give-It-An-Id"
                    />
                    <div className="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        className="svg-celebrate"
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          ) : (
            <h2>Cannot Find the product!</h2>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
