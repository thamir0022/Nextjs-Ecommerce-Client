"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { OutlinedInput } from "@mui/material";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CircularProgress from "@mui/material/CircularProgress";
import PaymentIcon from "@mui/icons-material/Payment";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image'

export default function CartPage(req) {
  const { cartProducts, addToCart, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [orderInformation, setOrderInformation] = useState({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  let [totalAmount, setTotalAmount] = useState(0);

  const handleOrderInformation = (e) => {
    setOrderInformation({ ...orderInformation, [e.target.id]: e.target.value });
    console.log(orderInformation);
  };

  useEffect(() => {
    const getCartProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/product", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(cartProducts),
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data.products || []);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch cart products:", response.status);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    getCartProducts();
  }, [cartProducts]);

  const handleIncrement = (id) => {
    addToCart(id);
  };

  const handleDecrement = (id) => {
    removeProduct(id);
  };

  useEffect(() => {
    let amount = 0;
    for (const productId of cartProducts) {
      const product = products.find((p) => p._id === productId);
      if (product) {
        const price = product.price || 0;
        const quantity = cartProducts.filter((id) => id === productId).length;
        amount += price * quantity;
      }
    }

    amount = amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
    setTotalAmount(amount);
  }, [cartProducts, products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCheckingOut(true);
    const orderInfo = {
      ...orderInformation,
      cartProducts,
    };
    const res = await fetch("/api/checkout", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(orderInfo),
    });
    const data = await res.json();
    if (data.url) {
      setIsCheckingOut(false);
      router.push(data.url);
    }
    setIsCheckingOut(false);
  };
  return (
    <div className="bg-gray-200">
      <Header />
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div>
          {cartProducts?.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-center mt-10 font-[Poppins]">
                Your Cart
              </h2>
              <div className="flex justify-around w-full px-20 py-10">
                <div className="flex h-fit w-1/2 flex-col gap-10">
                  {products?.length > 0 &&
                    products.map((product, i) => {
                      const quantity = cartProducts.filter(
                        (id) => id === product._id
                      ).length;
                      const totalPrice = (
                        quantity * product.price
                      ).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 2,
                      });
                      return (
                        <div
                          key={i}
                          className="flex items-center justify-evenly w-full h-80 p-3 bg-white rounded-lg shadow-lg"
                        >
                          <Link href={`/product/${product._id}`} className="h-fit w-3/5">
                            <Image
                              className="h-44 p-2 rounded-md m-auto mix-blend-multiply"
                              src={product.images ? product.images[0] : ""}
                              alt={product.title}
                              height={100}
                              width={100}
                              quality={100}
                            />
                            <p className="text-center text-clip font-semibold mt-2">
                              {product.title}
                            </p>
                          </Link>

                          <div className="text-center font-semibold">
                            <h2 className="text-xl">Quantity</h2>
                            <div className="flex gap-2">
                              <button
                                className="w-8 h-full rounded-sm shadow-sm bg-gray-200 font-semibold"
                                onClick={() => handleDecrement(product._id)}
                              >
                                <RemoveIcon />
                              </button>
                              <p>{quantity}</p>
                              <button
                                className="w-8 h-full rounded-sm shadow-sm bg-gray-200 font-semibold"
                                onClick={() => handleIncrement(product._id)}
                              >
                                <AddIcon />
                              </button>
                            </div>
                          </div>
                          <div className="text-center font-semibold">
                            <h2 className="text-xl">Price</h2>
                            <p>{totalPrice}</p>
                          </div>
                        </div>
                      );
                    })}
                  <div className="w-1/2 self-center">
                    <h2 className="text-2xl font-semibold">
                      Total Amount {totalAmount}
                    </h2>
                  </div>
                </div>
                <div className="w-1/3 h-fit py-5 bg-white rounded-lg shadow-lg">
                  <h3 className="text-3xl font-[Poppins] font-bold text-center">
                    Order Information
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 items-center mt-3"
                  >
                    <OutlinedInput
                      id="name"
                      value={orderInformation.name}
                      onChange={handleOrderInformation}
                      className="w-3/4 h-10"
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                    <OutlinedInput
                      id="email"
                      value={orderInformation.email}
                      onChange={handleOrderInformation}
                      className="w-3/4 h-10"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <div className="flex gap-6 justify-evenly">
                      <OutlinedInput
                        id="city"
                        value={orderInformation.city}
                        onChange={handleOrderInformation}
                        className="w-40 h-10"
                        type="text"
                        placeholder="City"
                        name="city"
                        required
                      />
                      <OutlinedInput
                        id="postCode"
                        value={orderInformation.postCode}
                        onChange={handleOrderInformation}
                        className="w-40 h-10"
                        type="text"
                        placeholder="Postal Code"
                        name="postCode"
                        required
                      />
                    </div>
                    <OutlinedInput
                      id="streetAddress"
                      value={orderInformation.streetAddress}
                      onChange={handleOrderInformation}
                      className="w-3/4 h-10"
                      type="text"
                      placeholder="Street Address"
                      name="streetAddress"
                      required
                    />
                    <OutlinedInput
                      id="state"
                      value={orderInformation.state}
                      onChange={handleOrderInformation}
                      className="w-3/4 h-10"
                      type="text"
                      placeholder="State"
                      name="state"
                      required
                    />
                    <button
                      className={`btn-black ${
                        isCheckingOut && "cursor-not-allowed opacity-75"
                      }`}
                      type="submit"
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? (
                        <CircularProgress
                          color="inherit"
                          size={30}
                        />
                      ) : (
                        <>
                          Continue to payment
                          <PaymentIcon />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            !isLoading && (
              <div className="w-screen h-screen flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Your Cart Is Empty!</h2>
              </div>
            )
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
