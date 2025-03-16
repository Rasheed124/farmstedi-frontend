import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  bg-transparent pt-5">
          <div className="flex  items-center gap-x-20 ">
            {/* LOGO */}
            <div className="">
              <a className="block text-fmsgreenLight text-2xl font-bold " href="#">
                <h1>Farm Stedi</h1>
              </a>
            </div>

            <div className="">
              <nav  className="bg-transparent md:bg-white rounded-full p-4 flex font-light  gap-x-6" >
                <ul className=" items-center gap-6 text-sm hidden md:flex">
                  <li>
                    <Link
                      className="text-white bg-fmsgreenLight p-3 rounded-full "
                      href="#"
                    >
                      {" "}
                      Plant Finder{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black p-3 rounded-full "
                      href="#"
                    >
                      {" "}
                      My plant{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black p-3 rounded-full "
                      href="#"
                    >
                      {" "}
                      Notifications{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black p-3 rounded-full "
                      href="#"
                    >
                      {" "}
                      About us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black p-3 rounded-full "
                      href="#"
                    >
                      {" "}
                      Contact us{" "}
                    </Link>
                  </li>

                
                </ul>

                  <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                      <Link
                        className=" px-5 py-2.5 rounded-full  text-sm  text-fmsgreenLight "
                        href="#"
                      >
                        Log in
                      </Link>

                      <div className="hidden sm:flex">
                        <Link
                          className="px-5 py-2.5 rounded-full  text-sm text-fmsgreenLight  border border-fmsgreenLight hover:bg-fmsgreenLight hover:text-white"
                          href="#"
                        >
                          Signup
                        </Link>
                      </div>
                    </div>

                    <div className="block md:hidden">
                      <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                
              </nav>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
