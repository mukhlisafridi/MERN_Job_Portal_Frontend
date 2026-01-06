import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-0 py-14">
      <div className="flex flex-col gap-6 my-10">
        <span className="mx-auto px-4 py-1.5 select-none rounded-full bg-gray-100 text-[#F83002] font-medium text-sm sm:text-base">
        Your Career, Our Mission
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight select-none">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto select-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>

        {/* Search Bar */}
        <div
          className="
          flex w-full max-w-md sm:max-w-lg md:max-w-xl
          mx-auto mt-6
          rounded-full
          border border-gray-200
          shadow-md
          focus-within:shadow-lg
          focus-within:border-[#6A38C2]
          transition-all
          duration-300
          overflow-hidden
        "
        >
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="
              h-12 sm:h-14
              w-full
              px-5
              text-sm sm:text-base
              outline-none
              placeholder:text-gray-400
            "
          />

          <Button
            className="
              h-12 sm:h-14
              px-6 sm:px-8
              bg-[#6A38C2]
              hover:bg-[#5a2fa8]
              rounded-none
              transition-all
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
