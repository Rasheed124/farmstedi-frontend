import Link from "next/link";
import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-fmsBlack text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium ">About</p>

                <ul className="mt-6 space-y-4 text-sm capitalize">
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      Features{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      Our Products{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium ">Contact us</p>

                <ul className="mt-6 space-y-4 text-sm capitalize">
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      Email: support@farmstedi.com{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      Phone: +(234) 567-890{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium ">Follow</p>

                <ul className="mt-6 space-x-4 flex  text-sm capitalize">
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      <FaXTwitter className="text-white text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      <IoLogoFacebook className="text-white text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className=" transition hover:opacity-75">
                      {" "}
                      <FaInstagram className="text-white text-xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <ul className="flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Support{" "}
                  </a>
                </li>
              </ul>

              <p className="text-xs mt-3 sm:mt-0  text-white">
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
