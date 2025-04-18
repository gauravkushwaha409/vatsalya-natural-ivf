import { IsuccessStoriesData } from "@/app/success-story/interface/successStories.interface";
import quoteIcon from "@/assests/about/quoteIcon.png";
import Image from "next/image";
import TestimonialSwiper from "./TestimonialSwiper";
// import CustomCarousel from "./Carousel";

type Props = {
  data: IsuccessStoriesData;
};
const Testimonial: React.FC<Props> = ({ data }) => {
  return (
    <div className="pb-6 sm:pb-10 md:pl-20">
      <div className="relative bg-gradient-to-l from-primary-100 to-[#EBC0DB] p-4 md:p-10 rounded-tl-[20px] rounded-bl-[20px] w-full max-h-[774px]">
        {/* quoteIcon */}
        <div className="-top-6 md:-top-15 md:-left-10 z-10 absolute flex justify-center items-center bg-background-100 rounded-full w-20 h-20 md:w-36 md:h-36">
          <Image
            src={quoteIcon}
            alt="quoteIcon"
            width={100}
            height={100}
            className="w-10 h-10 md:w-[100px] md:h-[100px] object-contain"
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between">
          {/* Text Section  */}
          <div className="space-y-4 pt-20 lg:pt-16 pb-10 lg:pb-0 lg:w-[30%]">
            <div className="flex items-center gap-4 w-full">
              <h2 className="font-bold text-primary-500 text-base uppercase leading-[150%] tracking-widest">
                Testimonial
              </h2>
              <div className="flex-1 bg-primary-500 max-w-[148px] h-px"></div>
            </div>

            <h2 className="font-semibold text-text-500 typography-h2">
              What Our Patient Says About Us
            </h2>
          </div>
          {/* Carousel Section  */}
          <div className="lg:w-[70%]">
            <TestimonialSwiper data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
