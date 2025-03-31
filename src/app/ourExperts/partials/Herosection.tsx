import Breadcrumb from "@/components/Breadcumb";
import React from "react";
import heropic from "@/assests/about/family.png";
import Image from "next/image";

const Herosection = () => {
  return (
    <header>
      <div className="relative h-[60vh] w-full">
        <Image
          src={heropic}
          alt="heropic"
          width={1920}
          height={1080}
          className="w-full h-full absolute top-0 object-cover z-10 brightness-50"
        />
        <div className="absolute top-5 z-30  transform left-1/2 -translate-x-1/2">
          <Breadcrumb name="OurExperts" baseName="Home" />
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2  text-center z-10 text-white">
          <h1 className="typography-h3 pb-5 font-bold">Our Experts</h1>
          <p className="typography-paragraph-regular font-normal !text-text-50">
            Our team of experts is dedicated to providing advanced fertility
            care with compassion and precision, guiding you on your journey to
            parenthood.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Herosection;
