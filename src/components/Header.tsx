"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent pt-5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex lg:justify-normal lg:gap-x-16 justify-between items-center">
          {/* LOGO */}
          <div>
            <a className="block text-fmsgreenLight text-2xl font-bold" href="#">
              <h1>Farm Stedi</h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <nav className="bg-white rounded-full p-4 flex gap-x-6">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white bg-fmsgreenLight p-3 rounded-full"
                    href="#"
                  >
                    Plant Finder
                  </Link>
                </li>
                <li>
                  <Link className="text-black p-3 rounded-full" href="#">
                    My Plant
                  </Link>
                </li>
                <li>
                  <Link className="text-black p-3 rounded-full" href="#">
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link className="text-black p-3 rounded-full" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-black p-3 rounded-full" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="px-5 py-2.5 rounded-full text-sm text-fmsgreenLight"
                    href="#"
                  >
                    Log in
                  </Link>

                  <div className="sm:flex">
                    <Link
                      className="px-5 py-2.5 rounded-full text-sm text-fmsgreenLight border border-fmsgreenLight hover:bg-fmsgreenLight hover:text-white"
                          href="/signup"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              {isOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute z-50 top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out">
            <nav className="p-4 space-y-4">
              <ul className="text-sm space-y-4">
                <li>
                  <Link className="block text-black p-3 rounded-full" href="#">
                    Plant Finder
                  </Link>
                </li>
                <li>
                  <Link className="block text-black p-3 rounded-full" href="#">
                    My Plant
                  </Link>
                </li>
                <li>
                  <Link className="block text-black p-3 rounded-full" href="#">
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link className="block text-black p-3 rounded-full" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="block text-black p-3 rounded-full" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="space-y-4">
                <Link
                  className="block w-full text-center px-5 py-2.5 rounded-full text-fmsgreenLight border border-fmsgreenLight"
                  href="#"
                >
                  Log in
                </Link>
                <Link
                  className="block w-full text-center px-5 py-2.5 rounded-full text-white bg-fmsgreenLight"
                  href="/signup"
                >
                  Signup
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
