import quoteIcon from "@/assests/about/quoteIcon.png";
import Image from "next/image";
import TestimonialSwiper from "./TestimonialSwiper";
// import CustomCarousel from "./Carousel";

const Testimonial = () => {
  return (
    <div className="pb-16 md:pb-24 pl-4 md:pl-26">
      <div className="relative bg-gradient-to-l from-primary-100 to-[#EBC0DB] p-4 md:p-10 rounded-tl-[20px] rounded-bl-[20px] w-full max-h-[564px]">
        {/* quoteIcon */}
        <div className="-top-15 -left-10 z-10 absolute flex justify-center items-center bg-background-100 rounded-full w-36 h-36">
          <Image
            src={quoteIcon}
            alt="quoteIcon"
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
        <div className="flex justify-between">
          {/* Text Section  */}
          <div className="space-y-4 py-16 md:py-24 w-[30%]">
            <div className="flex items-center gap-4 w-full">
              <h2 className="font-bold text-primary-500 text-base uppercase  leading-[150%] tracking-widest">
                Testimonial
              </h2>
              <div className="flex-1 bg-primary-500 max-w-[148px] h-px"></div>
            </div>

            <h3 className="font-semibold text-text-500 typography-h3">
              What Our Patient Says About Us
            </h3>
          </div>
          {/* Carousel Section  */}
          <div className="w-[70%]">
            <TestimonialSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
