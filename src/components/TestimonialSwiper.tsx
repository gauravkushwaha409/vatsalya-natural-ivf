"use client";
import VideoModal from "@/components/VideoModal";
import { testimonialData } from "@/data/testimonialData";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSwiper = ({}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [noofSlides, setNoofSlides] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // const [setVideoUrl] = useState<string>("");

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setNoofSlides(swiperRef.current.swiper.slides.length || 0);
      setActiveSlide(swiperRef.current.swiper.activeIndex || 0);
    }
  }, []);

  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-center pr-10">
        <div className="w-full lg:h-[30.5rem]">
          {testimonialData && testimonialData?.length > 0 && (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => {
                setNoofSlides(swiper.slides.length);
                setActiveSlide(swiper.activeIndex);
              }}
              speed={1200}
              spaceBetween={50}
              slidesPerView={2}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.activeIndex);
              }}
            >
              {testimonialData?.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    data={item}
                    setIsOpenModal={setIsOpenModal}
                    // setVideoUrl={setVideoUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mt-2 lg:-mt-10 w-full">
        {/* Left Arrow  */}
        <button
          disabled={activeSlide === 0}
          className="px-6 text-white cursor-pointer"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slidePrev();
            }
          }}
        >
          <GrPrevious />
        </button>
        {/* Pagination Dots  */}
        <div className="flex gap-2">
          {Array.from({ length: noofSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                console.log(`Navigating to slide: ${index}`);
              }}
              className="relative hover:bg-[#888888]/80 rounded-full size-3 bg-text-200/50 cursor-pointer"
            >
              {index === activeSlide && (
                <motion.div
                  key={activeSlide}
                  layoutId="press-hero-carousel-active-dot"
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                  }}
                  className="absolute inset-0 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>
        {/* Right arrow  */}
        <button
          disabled={activeSlide === noofSlides - 1}
          className="px-6 text-white cursor-pointer"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slideNext();
            }
          }}
        >
          <GrNext />
        </button>
      </div>

      <VideoModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        videoUrl="https://www.youtube.com/embed/vLyP1aOmENc?si=aPCpD2JOABihWFx_"
      />
    </div>
  );
};
export default TestimonialSwiper;
