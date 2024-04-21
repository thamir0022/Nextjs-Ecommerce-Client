import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="mt-auto py-3 pl-6 pr-10 w-screen h-80 flex flex-col bg-gray-200">
      <div className="flex w-full h-60">
      <div className="h-full w-1/6 mx-auto flex items-center justify-center">
        <Link className="text-2xl flex gap-1" href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          Ecommerce
        </Link>
      </div>
      <div className="flex flex-col h-full mt-auto w-full">
        <div className="h-full grid grid-cols-3 grid-rows-4">
          <h2 className="text-xl font-semibold  w-full flex justify-center items-center">Go to</h2>
          <h2 className="text-xl font-semibold  w-full flex justify-center items-center">Information</h2>
          <h2 className="text-xl font-semibold  w-full flex justify-center items-center">Services</h2>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Legal
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Customer Service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/cart"}
          >
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Privacy and Policy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Product Service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/products"}
          >
            All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            Terms and Conditions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="font-semibold border-r text-gray-700 hover:text-gray-900 border-gray-400 w-full flex justify-center items-center hover:underline hover:pl-2 transition-all"
            href={"/"}
          >
            All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-3/5">
        <p className="poppins text-center">Subscribe To Our Email, For Best Deals.</p>
        <div className="flex w-full max-w-sm  space-x-2">
          <Input className="border-2 border-black focus:border-blue-600" type="email" placeholder="yourname@mail.com" />
          <Button className="bg-black text-white" type="submit">Subscribe</Button>
        </div>
      </div>
      </div>
      <div className="w-full ml-auto h-20 flex">
      <div className="my-auto h-1/2 w-40 flex justify-between items-center">
        <InstagramIcon color="secondary"/>
        <FacebookIcon color="primary"/>
        <XIcon/>
        <LinkedInIcon color="primary"/>
      </div>
      <div className="h-1/2 w-full my-auto text-center poppins">
        Copyright © {new Date().getFullYear()} Ecommerce.
      </div>
      </div>
    </footer>
  );
}
