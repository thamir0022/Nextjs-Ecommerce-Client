import {
  Button,
  IconButton,
  Rating,
  Snackbar,
  Tooltip,
  Zoom,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function ProductBox({ _id, title, price, images }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const imageSrc = images && images.length > 0 ? images[0] : "";
  const { addToCart, removeProduct } = useContext(CartContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleAddToCart = (productName, productId) => {
    addToCart(_id);
    toast("Product added to cart", {
      description: productName,
      action: {
        label: "Undo",
        onClick: () => removeProduct(productId),
      },
    });
  };

  return (
    <div className="bg-white h-96 w-80 rounded-xl shadow-md">
      <div className="h-1/2">
        {imageSrc ? (
          <Link href={`/product/${_id}`}>
            <Image
              className="p-2 w-full h-full rounded-tr-xl rounded-tl-xl object-contain"
              src={imageSrc}
              height={100}
              width={200}
              quality={100}
              alt={title}
              priority={true}
            />
          </Link>
        ) : (
          <p>No Images to this product!</p>
        )}
        <div className="flex flex-col gap-1">
          <h2 className="text-center font-semibold truncate">{title}</h2>
          <div className="flex gap-2 px-2">
            <Rating
              className="my-1"
              name="read-only"
              precision={0.1}
              value={2.6}
              readOnly
            />
            <p className="my-auto">243</p>
            <div className="w-full flex justify-end my-auto">
              <p className="font-semibold bg-red-700 rounded-full px-2">10%</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <p className="text-xl line-through opacity-70">
              {(price + (price * 10) / 100).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="text-xl font-semibold">
              {price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex justify-evenly">
            <button className="hover:bg-white gap-1 rounded-xl shadow-sm hover:border-2 hover:border-black inline-flex py-3 px-4 bg-black text-white hover:text-black transition duration-200">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(title, _id)}
              className="bg-white gap-1 rounded-xl shadow-sm border-2 border-black inline-flex py-3 px-4 hover:bg-black hover:text-white transition duration-200"
            >
              <ShoppingCartOutlinedIcon/>
              Add To Cart
            </button>
          </div>
          <Tooltip
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 300 }}
            className="heart-container"
            title={"Add to favorites"}
          >
            <div className="">
              <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Added To Cart!"
        action={action}
      />
    </div>
  );
}
