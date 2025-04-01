import React from "react";
import blogHero from "@/assests/blog/blogHero.png";
import Image from "next/image";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";

const HeroBlog = () => {
  return (
    <>
      <div className="py-10 bg-gradient-to-b from-primary-50 to-background-100">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Blog" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            Blog & News
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden mb-12 md:mb-20">
        <div className="absolute inset-0 z-0 border-primary-500">
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
        <div className="relative z-10 max-w-4xl flex flex-col items-center md:items-start justify-center h-full text-white px-6 md:px-12 lg:px-20 text-center md:text-left">
          <p className="typography-paragraph-regular text-text-400">Feature</p>

          {/* Heading */}
          <h1 className="typography-h3 font-bold my-3.5 leading-[1.5] text-secondary-500 max-w-lg">
            A New Beginning: Your Journey to Parenthood
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
