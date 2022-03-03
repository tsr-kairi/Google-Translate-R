import React, { useState } from "react";
import Image from "next/image";
import HamBurger from "./HamBurger";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#111116] md:px-8 py-2.5 border-solid border-b border-gray-500 h-[70px] top-0 sticky z-50">
      <div className="container w-full flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center sm-[47%] w-[33%] justify-between">
          <a href="#" className="hidden md:block items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Google
            </span>
            <span className="text-gray-400 ml-2 mt-1 text-sm">Translate</span>
            <sup className="text-gray-600">Ⓡ</sup>
          </a>

          {/* menu */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer ml-4 z-50 transform hover:scale-105 duration-500 ease-in-out origin-center transition-all"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[#346AFF] w-[28px] h-[28px] font-semibold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="text-white hover:text-[#346AFF] w-[28px] h-[28px] font-semibold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>

          <div className="hidden md:block relative items-center mr-3 mt-2">
            <div className="flex absolute inset-y-0 left-1 items-center pl-3 pointer-events-none py-4">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block py-[6px] pl-12 w-full text-gray-300 bg-[#111116] rounded-full border border-gray-500 sm:text-xs"
              placeholder="Search in docs, history..."
            />
          </div>

          <a href="#" className="block md:hidden items-center ml-4">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Google
            </span>
            <span className="text-gray-400 ml-2 mt-1 text-sm">Translate</span>
            <sup className="text-gray-600">Ⓡ</sup>
          </a>
        </div>

        <div className="flex items-center md:order-2">
          {/* user-image */}
          <button className="flex items-center rounded-full h-8 w-8 border-solid border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#dadce0] ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button
            className="flex mr-3 rounded-full ml-4 md:mr-0 focus:ring-4 focus:ring-[#346AFF] p-1"
            type="button"
          >
            <Image
              className="w-8 h-8 rounded-full"
              src="/images/user-image.png"
              alt="user photo"
              height={32}
              width={32}
            />
          </button>
        </div>
      </div>

      {/* hamburger */}
      <div
        className={`md:hidden block space-y-2 pt-4 w-[90%] z-50 h-screen bg-[#111116] mt-5 transition-all duration-500 ease-in left-0 px-8 opacity-100 ${
          open ? "block" : "hidden"
        }`}
      >
        <HamBurger />
      </div>
    </div>
  );
}
