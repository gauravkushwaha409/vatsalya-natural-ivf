import Breadcrumb from "@/components/Breadcumb";
import React from "react";
import blogHero from "@/assests/blog/blogHero.png";
import Image from "next/image";

const HeroBlog = () => {
  return (
    <>
      <div className="bg-primary-50 backdrop-blur-[0.6px] py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <Breadcrumb name="Blog" baseName="home" style="text-text-400" />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            Blog & News
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden mb-20">
        <div className="absolute inset-0 z-0  border-primary-500">
          <Image
            src={blogHero}
            alt="Happy couple with newborn baby"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,185,227,0.5)_0%,rgba(234,186,181,0)_100%)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl flex flex-col items-start justify-center h-full text-white pl-20">
          <p className="typography-paragraph-regular text-text-400">Feature</p>

          {/* Heading */}
          <h1 className="typography-h3 font-bold my-3.5 leading-[150%] text-secondary-500 max-w-md">
            A New Beginning: <br /> Your Journey to Parenthood
          </h1>

          {/* Subheading */}
          <p className="typography-paragraph-large text-text-400 mb-10">
            We understand that the journey to parenthood is unique for every
            individual and couple. Whether you are considering fertility
            treatments, exploring IVF options, or simply looking for guidance on
            reproductive health, we are here to support you every step of the
            way.
          </p>

          {/* CTA Button */}
          <button className="text-secondary-500 border-[0.4px] border-secondary-500 px-8 py-3 rounded-[6.25rem] font-manrope font-bold typography-paragraph-regular cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBlog;
