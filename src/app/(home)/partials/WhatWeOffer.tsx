"use client";

import { useSlider } from "@/components/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { WhatWeOfferProps } from "../interface/whatWeOffer.interface";
import { cn } from "@/utils/cn";

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({
  data,
  mainWrapperClassName,
}) => {
  const [_isInView, setIsInView] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.4 }}
      className={cn(`mt-10 pb-10 md:pb-12 padding`, mainWrapperClassName)}
    >
      <div className="flex justify-center items-center gap-3 sm:gap-5 py-3">
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 typography-h3">
          What we Offer
        </h2>
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
      </div>
      <p className="px-4 pb-2 md:pb-16 lg:pb-8 font-bold text-text-500 text-center typography-h2">
        Comprehensive Fertility Care, Tailored for You
      </p>

      <>
        <style>{`
          .custom-swiper .swiper-pagination {
            position: relative !important;
            bottom: auto !important;
            margin-top: 2.5rem;
            display: flex;
            justify-content: center;
            gap: 0.5rem;
          }

          .custom-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            border:1px solid #ff6f61 !important;
            border-radius: 50% !important;
            background: #DEDEDE80 !important;
            opacity: 1 !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            margin: 0 !important;
          }

          .custom-pagination-bullet-active {
            background: #ff6f61 !important;
            width: 24px !important;
            border-radius: 50px !important;
          }

          .swiper-slide {
            padding-top: 8px;
          }
        `}</style>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          onSlideChange={(swiper) => {
            handleSlideChange();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          autoplay={{ delay: 5000 }}
          spaceBetween={16}
          loop={false}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
            modifierClass: "custom-pagination-",
          }}
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
          className="!pt-4 w-full h-full custom-swiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <Link
                  href={`/services/${item?.slug}`}
                  className="flex justify-between items-center h-full"
                >
                  <div className="z-10 relative flex flex-col justify-center bg-primary-50 p-7 rounded-tl-[80px] rounded-br-[80px] w-full transition-all hover:-translate-y-5 duration-600 ease-in-out transform">
                    <div className="size-[7.25rem]">
                      <Image
                        src={item?.icon}
                        alt={item?.name || "Service icon"}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                      <div className="flex justify-between w-full">
                        <h3 className="font-bold text-[#1A1A1A] text-[22px] leading-[120%] tracking-[-2%]">
                          {item?.name}
                        </h3>
                        <button
                          aria-label={`Go to ${item?.name}`}
                          className="cursor-pointer"
                        >
                          <IoArrowForwardOutline
                            size={24}
                            className="text-primary-500 -rotate-40"
                          />
                        </button>
                      </div>
                      <div
                        className="pt-1.5 font-medium text-[#667085] text-[12px] line-clamp-2 leading-[160%] tracking-[-1%] prose"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="right-4 md:right-20 z-10 absolute flex justify-end items-center gap-3 -mt-6 w-fit">
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

        {/* <button
          type="submit"
          onClick={() => handleAppointmentClick()}
          className="flex items-center gap-2 md:gap-3 bg-secondary-500 mx-auto mt-6 md:mt-12 lg:mt-14 px-6 md:px-8 py-3 md:py-4 border border-secondary-200 rounded-full font-extrabold text-white text-sm md:text-base cursor-pointer lg:typography-paragraph-regular"
        >
          Book your Appointment
        </button>

        <RequestAppoimentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        /> */}
      </>
    </motion.div>
  );
};

export default WhatWeOffer;
