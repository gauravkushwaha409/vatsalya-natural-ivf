"use client";

import { useSlider } from "@/components/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { WhatWeOfferProps } from "../interface/whatWeOffer.interface";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.4 }}
      className="mb-10 md:mb-20 padding"
    >
      <div className="flex items-center justify-center gap-3 py-3 sm:gap-5">
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          What we Offer
        </h2>
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
      </div>
      <p className="px-4 pb-8 font-bold text-center md:pb-16 text-text-500 typography-h2">
        Comprehensive Fertility Care, Tailored for You
      </p>

      <div className="">
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
        `}</style>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            handleSlideChange();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
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
          className="w-full custom-swiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Link
                  href={`/services/${item?.slug}`}
                  className="flex items-center justify-between h-full"
                >
                  <div className="group relative flex flex-col justify-center bg-primary-50 hover:bg-primary-100 p-7 rounded-tl-[50px] rounded-br-[50px] w-full overflow-hidden transition-colors duration-300">
                    <div className="size-[7.25rem]">
                      <Image
                        src={item?.icon}
                        alt={item?.name || "Service icon"}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                      <div className="flex justify-between w-full">
                        <h3 className="font-bold text-[22px] leading-[120%] tracking-[-2%] text-[#1A1A1A]">
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
                      <p
                        className="pt-1.5 font-medium text-[#667085] line-clamp-2 leading-[160%] tracking-[-1%] text-[12px] prose"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="absolute z-10 flex items-center justify-end gap-3 -mt-6 w-fit right-4 md:right-20">
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
          type="button"
          onClick={() => handleAppointmentClick()}
          className="flex items-center gap-3 px-8 py-4 mx-auto font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular mt-14"
        >
          Book your Appointment
        </button>
        <RequestAppoimentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </motion.div>
  );
};

export default WhatWeOffer;
