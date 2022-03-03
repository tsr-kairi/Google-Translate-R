import React, { useState } from "react";

export default function Sidebar() {
  //   const [openTab, setOpenTab] = useState(true);
  return (
    <aside className="md:w-[20%] bg-[#111116] border-solid border-r border-gray-500">
      <div className="md:block hidden md:h-max h-auto py-4 tablet:pl-2 md:pl-10 pr-2">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Documents</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">History</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Downloads</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Bookmarks</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 text-base font-normal text-gray-400 hover:text-white rounded-full hover:bg-[#346AFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Support</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-xs font-medium text-white bg-blue-800 rounded-[50%]">
                3
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-6 mt-56 text-base font-normal text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
