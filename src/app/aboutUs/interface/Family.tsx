import Image from "next/image";
import React from "react";
import family from "@/assests/about/family.png";

const Family = () => {
  return (
    <div className="py-16 md:py-24 container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-wide uppercase leading-[24px]">
            Our Vatsalya Family
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>
        </div>

        <h1 className="typography-h4 font-semibold tracking-tight ">
          A Team United by Care and Compassion
        </h1>

        <p className="text-text-400 typography-paragraph-large leading-[150%] font-medium max-w-7xl">
          Our team is more than just medical professionals; we are your support
          system. With collective expertise and a shared passion for helping
          families grow, we are here to walk with you every step of the way.
        </p>

        <div className="w-full h-96 mt-4">
          <Image
            src={family}
            alt="Family Photo"
            width={1280}
            height={384}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Family;
