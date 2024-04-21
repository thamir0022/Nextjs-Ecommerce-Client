"use client";

import React, { Suspense, useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CartContext } from "../../components/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CloseIcon from "@mui/icons-material/Close";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function PaymentPage() {
  const { clearCart } = useContext(CartContext);
  const searchParams = useSearchParams();
  const paymentSuccess = searchParams.get("payment_success");
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading && isAuthenticated && paymentSuccess === "true") {
      clearCart();
    }
  }, [isLoading]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      {paymentSuccess === "true" ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="custom-card">
            <div className="flex justify-center custom-header">
              <CreditScoreIcon className="custom-icon h-10 w-10" />
              <p className="text-2xl text-gray-500 font-semibold">
                Order Placed
              </p>
            </div>

            <p className="custom-message text-center">
              Congratulations! Your order has been placed successfully. Thank
              you for shopping with us!
            </p>

            <div className="custom-actions">
              <Link href={""} className="custom-read">
                My Orders
              </Link>

              <Link href={"/"} className="custom-mark-as-read">
                Go to home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        paymentSuccess === "false" && (
          <div className="w-screen h-screen flex items-center justify-center">
            <div className="custom-card">
              <div className="flex justify-center custom-header">
                <CloseIcon className="custom-icon h-10 w-10 !bg-red-600" />
                <p className="text-2xl text-gray-500 font-semibold">
                  Payment Failed
                </p>
              </div>

              <p className="custom-message text-center">
                We&apos;re sorry, but the payment for your order has failed.
                Please try again or contact support for assistance.
              </p>

              <div className="custom-actions">
                <Link href={""} className="custom-read">
                  Support
                </Link>

                <Link href={"/"} className="custom-mark-as-read">
                  Go to home
                </Link>
              </div>
            </div>
          </div>
        )
      )}
      <Footer />
    </Suspense>
  );
}
