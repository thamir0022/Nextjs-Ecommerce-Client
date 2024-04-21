import React from "react";
import "./globals.css";
import CartContextProvider from "@/components/CartContext";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Thamir's Ecommerce",
  description: "Ecommerce Front end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <main>
          <CartContextProvider>{children}</CartContextProvider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
