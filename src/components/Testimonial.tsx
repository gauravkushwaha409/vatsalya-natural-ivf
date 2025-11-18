"use client";

import {
  IsuccessStoriesData,
  IsuccessStoriesRecord,
} from "@/app/success-story/interface/successStories.interface";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSlider } from "./hooks/useSlider";
import TestimonialCard from "./TestimonialCard";
import VideoModal from "./modals/VideoModal";
import Image from "next/image";

type Props = {
  data: IsuccessStoriesData;
};
const Testimonial: React.FC<Props> = ({ data }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  const {
    swiperRef,
    activeIndex,
    goToSlide,
    handleSlideChange,
    goPrev,
    goNext,
  } = useSlider();

  return (
    <div className="pb-6 sm:pb-10 ">
      <div
        className="relative padding py-10  w-full max-h-[853px]"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 210, 206, 0.3) 0%, rgba(235, 192, 219, 0.3) 100%)",
        }}
      >
        <div className="w-[200px] h-[200px] absolute bottom-10 -right-20">
          <Image
            src="/svg/butterfly.svg"
            alt="Butterfly"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section  */}
        <div className="flex justify-center items-center gap-3 sm:gap-5 py-3">
          <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
            TESTIMONIALS
          </h2>
          <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        </div>
        <p className="px-4 pb-8 md:pb-16 text-text-500 font-bold text-center typography-h2">
          Success Stories
        </p>

        {/* Carousel Section  */}

        {data && data?.records?.length > 0 && (
          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              modules={[FreeMode]}
              slidesPerView={1}
              onSlideChange={(swiper) => {
                handleSlideChange();
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSwiper={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              loop={false}
              freeMode={false}
              spaceBetween={16}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="w-full testimonial-swiper"
            >
              {data?.records?.map(
                (testimonial: IsuccessStoriesRecord, index: number) => (
                  <SwiperSlide className=" flex-shrink-0 w-full" key={index}>
                    <TestimonialCard
                      key={index}
                      data={testimonial}
                      setIsOpenModal={setIsOpenModal}
                      setVideoUrl={setVideoUrl}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        )}

        {/* Custom Pagination Dots for Mobile */}
        <div className="mt-10 flex justify-center gap-2  w-fit mx-auto">
          {data?.records?.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary-500 w-6" : "bg-[#FFFFFF80]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 justify-end w-fit absolute right-4 md:right-20 -mt-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={isBeginning}
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 ${
              isBeginning
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isEnd}
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 ${
              isEnd
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        <button
          type="submit"
          className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-extrabold text-white cursor-pointer typography-paragraph-regular mx-auto mt-14"
        >
          Book your Appointment
        </button>
      </div>

      <VideoModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default Testimonial;
