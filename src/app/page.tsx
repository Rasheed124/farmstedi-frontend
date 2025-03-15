import Header from "@/components/layout/Header";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { TbTopologyRing3 } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative bg-[url(/images/home-bg.png)] bg-cover bg-center bg-no-repeat">
          {/* <Header /> */}
          <section className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-sm lg:max-w-xl  text-left  lg:pr-10">
              <h1 className=" font-light text-black ">
                <span className="text-3xl  sm:text-5xl lg:text-7xl">
                  {" "}
                  Discover the Perfect Plants for Your Land{" "}
                </span>
                <span className="text-3xl ">🌱</span>
              </h1>

              <div className="mt-6 flex text-center">
                <a
                  href="#"
                  className="block  rounded-full bg-transparent text-fmsgreenLight hover:text-white px-12 py-3 border border-fmsgreenLight text-sm font-medium shadow-sm hover:bg-fmsgreenLight focus:ring-3 focus:outline-hidden w-auto"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className=" mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              How it works?
            </h2>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-14">
            <div className=" rounded-lg bg-fmsgreenMediumLight flex flex-col justify-center items-center p-10">
              <div className="bg-fmsgreenExtraLight text-fmsgreenLight p-5">
                <LuPencilLine className=" text-2xl" />
              </div>
              <div className="mt-4 px-4 text-center">
                <h3 className="text-lg sm:text-xl capitalize font-semibold">
                  Input Details
                </h3>

                <p className="mt-2 text-pretty text-fmsBlack">
                  Explore tailored plant recommendations based on your inputs.
                  Compare options and learn about their growth needs, watering
                  schedules, and care requirements.
                </p>
              </div>
            </div>
            <div className=" rounded-lg bg-fmsgreenMediumLight flex flex-col justify-center items-center p-10">
              <div className="bg-fmsgreenExtraLight text-fmsgreenLight p-5">
                <IoIosSearch className=" text-2xl" />
              </div>
              <div className="mt-4 px-4 text-center">
                <h3 className="text-lg sm:text-xl capitalize font-semibold">
                  find my plant
                </h3>

                <p className="mt-2 text-pretty text-fmsBlack">
                  Provide key information about your location, soil type, and
                  climate preferences to discover the perfect plants for your
                  environment.
                </p>
              </div>
            </div>
            <div className=" rounded-lg bg-fmsgreenMediumLight flex flex-col justify-center items-center p-10">
              <div className="bg-fmsgreenExtraLight text-fmsgreenLight p-5">
                <TbTopologyRing3 className=" text-2xl" />
              </div>
              <div className="mt-4 px-4 text-center">
                <h3 className="text-lg sm:text-xl capitalize font-semibold">
                  select result
                </h3>

                <p className="mt-2 text-pretty text-fmsBlack">
                  Choose your plant and get personalized care tips, including
                  watering schedules and growth tracking, to ensure a thriving
                  cultivation experience
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-fmsBlack text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-medium ">About</p>

                  <ul className="mt-6 space-y-4 text-sm capitalize">
                    <li>
                      <Link
                        href="#"
                        className=" transition hover:opacity-75"
                      >
                        {" "}
                        Features{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className=" transition hover:opacity-75"
                      >
                        {" "}
                        Our Products{" "}
                      </Link>
                    </li>
              
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="sm:flex sm:justify-between">
                <p className="text-xs text-white">
                  &copy; 2022. Company Name. All rights reserved.
                </p>

                <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
