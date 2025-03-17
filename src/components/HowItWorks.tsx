import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";
import { TbTopologyRing3 } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <>
      <section className=" mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            How it works?
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 mt-14">
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
    </>
  );
};

export default HowItWorks;
