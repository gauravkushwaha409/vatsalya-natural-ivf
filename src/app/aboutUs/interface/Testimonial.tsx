import React from "react";
import quoteIcon from "@/assests/about/quoteIcon.png";
import Image from "next/image";
import TestimonialSwiper from "./TestimonialSwiper";
import CustomCarousel from "./Carousel";

const Testimonial = () => {
  return (
    <div className="pb-16 md:pb-24  pl-4 md:pl-26">
      <div className="relative w-full py-16 md:py-24 bg-gradient-to-l from-primary-100 to-[#EBC0DB] max-h-[564px] p-4 md:p-10 rounded-bl-[20px] rounded-tl-[20px] ">
        {/* quoteIcon */}
        <div className="absolute -top-15 -left-10 rounded-full w-36 h-36 z-10 bg-white flex items-center justify-center">
          <Image
            src={quoteIcon}
            alt="quoteIcon"
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
        <div className="flex ">
          {/* Text Section  */}
          <div className="space-y-4 ">
            <div className="flex items-center w-full  gap-4 ">
              <h2 className="text-primary-500 uppercase tracking-wider text-base leading-[150%] font-bold">
                Testimonial
              </h2>
              <div className="h-px bg-primary-500 flex-1 max-w-[230px]"></div>
            </div>
            <h3 className="typography-h4 font-semibold text-text-500 ">
              What Our Patient Says About Us
            </h3>
          </div>
          {/* Carousel Section  */}
          {/* <TestimonialSwiper /> */}
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
