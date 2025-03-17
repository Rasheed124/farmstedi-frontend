import Header from "@/components/Header";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbTopologyRing3 } from "react-icons/tb";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative bg-[url(/images/home-bg.png)] bg-cover bg-center bg-no-repeat ">
          <Header />
          <section className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-[290px] md:max-w-sm lg:max-w-xl  text-left  lg:pr-10 mb-20 lg:mb-0">
              <h1 className=" font-light text-black ">
                <span className="text-3xl  sm:text-5xl lg:text-7xl">
                  {" "}
                  Discover the Perfect Plants for Your Land{" "}
                </span>
                <span className="text-3xl ">🌱</span>
              </h1>

              <div className="mt-4 lg:mt-6 flex text-center">
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

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* Footer*/}
        <Footer />
      </main>
    </>
  );
}
