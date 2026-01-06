"use client";

import { useSlider } from "@/components/hooks/useSlider";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { ICenter } from "@/interface/center";
import PATHS from "@/utils/path";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface LocationProps {
  data: ICenter[];
}

const Location = ({ data }: LocationProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <div className="mb-10 md:mb-20 u-padding-x">
      {/* Text Section  */}
      <div className="flex justify-center items-center gap-3 sm:gap-5 py-3">
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          LOCATIONS
        </h2>
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
      </div>
      <p className="px-4 pb-2 md:pb-16 lg:pb-8 font-bold text-text-500 text-center typography-h2">
        Our Clinics
      </p>

      <div className="relative w-full">
        {/* Carousel Section */}
        {data?.length > 0 && (
          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
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
              spaceBetween={10}
              pagination={{
                clickable: true,
                bulletClass: "custom-pagination-bullet",
                bulletActiveClass: "custom-pagination-bullet-active",
                modifierClass: "custom-pagination-",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="w-full custom-swiper"
            >
              {data.map((location, index) => (
                <SwiperSlide key={index} className="flex-shrink-0 w-full">
                  <div className="bg-white shadow-[0px_0px_32px_0px_#FBCED140] pb-5 rounded-[42px]">
                    <div className="mb-4.5 rounded-[32px] w-full h-[190px]">
                      <Image
                        src={location?.images[0] || location?.icon}
                        alt={location?.name}
                        width={800}
                        height={800}
                        className="rounded-[32px] w-full h-full object-cover"
                      />
                    </div>

                    <div className="px-5">
                      <div className="flex justify-between">
                        <p className="mb-3.5 font-bold text-[#1A1A1A] text-[18px] leading-[120%] tracking-[-2%]">
                          {location?.name}
                        </p>

                        <Link
                          href={`${PATHS.clinic}/${location?.slug}`}
                          className="inline-flex gap-2 font-medium text-[12px] text-primary-500 leading-[120%] tracking-[-2%]"
                        >
                          View
                          <IoArrowForwardOutline
                            size={24}
                            className="size-4 -rotate-40"
                          />
                        </Link>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <p className="inline-flex items-center gap-1.5 font-normal text-[#565656] text-[13px] leading-[21px]">
                          <FiMapPin />
                          {location?.location}
                        </p>
                        <p className="inline-flex items-center gap-1.5 font-normal text-[#565656] text-[13px] leading-[21px]">
                          <FiMail />
                          {location?.email}
                        </p>
                        <p className="inline-flex items-center gap-1.5 font-normal text-[#565656] text-[13px] leading-[21px]">
                          <FiPhone />
                          {location?.phone}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAppointmentClick()}
                        className="gap-3 mt-6 px-8 py-4 border-[0.5px] border-secondary-500 rounded-full w-full font-medium text-secondary-500 tracking-[-2%] typography-paragraph-regular"
                      >
                        Book your Appointment
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="right-4 md:right-20 z-10 absolute flex justify-end items-center gap-3 -mt-6 w-fit">
          <button
            type="button"
            onClick={goPrev}
            disabled={isBeginning}
            aria-label="Previous slide"
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 ${
              isBeginning
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
          >
            <ArrowLeft size={16} />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={isEnd}
            aria-label="Next slide"
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 ${
              isEnd
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Location;
