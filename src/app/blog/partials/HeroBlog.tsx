import React from "react";
import blogHero from "@/assests/blog/blogHero.png";
import Image from "next/image";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";

const HeroBlog = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10">
        <div className="flex flex-col justify-center items-center text-center">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Blog" }]}
          />
          <h1 className="pt-3 font-bold text-secondary-500 leading-[150%] typography-h2">
            Blog & News
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative mb-12 md:mb-20 w-full h-[500px] overflow-hidden">
        <div className="z-0 absolute inset-0 border-primary-500">
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
        <div className="z-10 relative flex flex-col justify-center items-center md:items-start px-5 md:px-12 lg:px-20 max-w-4xl h-full text-white md:text-left text-center">
          <p className="text-text-400 typography-paragraph-regular">Feature</p>

          {/* Heading */}
          <h1 className="my-3.5 max-w-lg font-bold text-secondary-500 leading-[1.5] typography-h2">
            A New Beginning: Your Journey to Parenthood
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-text-400 typography-paragraph-large">
            We understand that the journey to parenthood is unique for every
            individual and couple. Whether you are considering fertility
            treatments, exploring IVF options, or simply looking for guidance on
            reproductive health, we are here to support you every step of the
            way.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-3 border-[0.4px] border-secondary-500 rounded-[6.25rem] font-manrope font-bold text-secondary-500 cursor-pointer typography-paragraph-regular">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBlog;
