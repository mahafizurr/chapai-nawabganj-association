"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "./Header";

export default function Navbar() {
  // State for managing submenu visibility
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <nav className="bg-blue-950 p-4 rounded-sm shadow-md">
        {/* Navigation links */}
        <ul className="flex flex-col space-y-2 font-bold md:flex-row md:justify-center md:space-y-0 md:space-x-4">
          {/* Home link */}
          <li>
            <Link href="/">
              <span className="text-white hover:text-gray-300">HOME</span>
            </Link>
          </li>

          {/* Committee link with submenu */}
          <li className="relative group">
            <span
              onClick={toggleSubMenu}
              className="text-white hover:text-gray-300 cursor-pointer flex items-center"
            >
              COMMITTEE
              {/* Dropdown arrow icon */}
              <svg
                className={`ml-2 h-4 w-4 transition-transform transform ${
                  isSubMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>

            {/* Submenu */}
            <ul
              className={`${
                isSubMenuOpen ? "block" : "hidden"
              } md:absolute mt-2 md:mt-0 bg-white text-gray-800 p-2 rounded-lg shadow-md`}
            >
              <li>
                <Link href="/presentcommittee">
                  <span className="text-gray-800 hover:text-gray-500 cursor-pointer">
                    PRESENT COMMITTEE
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Other navigation links */}
          <li>
            <Link href="/advocates">
              <span className="text-white hover:text-gray-300">
                MEMBERS DIRECTORY
              </span>
            </Link>
          </li>
          <li>
            <Link href="/notice">
              <span className="text-white hover:text-gray-300">NOTICE</span>
            </Link>
          </li>
          <li>
            <Link href="/employee">
              <span className="text-white hover:text-gray-300">EMPLOYEE</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-gray-300">CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
