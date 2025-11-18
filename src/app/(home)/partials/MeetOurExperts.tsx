"use client";

import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import { useSlider } from "@/components/hooks/useSlider";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { Button } from "@/components/ui/button";
import PATHS from "@/utils/path";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MeetExpertsProps {
  data: IOurExpertsData;
}

const MeetOurExperts: React.FC<MeetExpertsProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <div className="mb-10 md:mb-20 padding">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 py-3 md:gap-5">
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          MEET OUR EXPERTS
        </h2>
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
      </div>

      {/* Subtitle */}
      <p className="px-4 pb-8 font-bold text-center md:pb-16 text-text-500 typography-h2">
        World-Class Doctors, Dedicated to Your Care
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
          {data?.records?.map((team) => (
            <SwiperSlide key={team.id}>
              <div className="bg-[#FFD2CE38] rounded-[42px] py-5 px-8 flex flex-col items-center">
                <div className="w-[214px] h-[250px] mb-6">
                  <Image
                    src={team.image}
                    alt={team.name}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[#1E1E1E] font-semibold text-[21px] leading-[150%] tracking-[-3%]">
                  {team?.name}
                </p>
                <p className="text-[#646464] font-normal text-[11px] leading-[100%] mb-3.5">
                  {team?.position}
                </p>

                <div className="flex items-center ">
                  <div className="text-[#333333] text-[13px] leading-[20px] font-normal flex items-center gap-2 border-r-[0.5px] border-r-[#D4D4D4] pr-2">
                    <IoBagOutline />
                    <p>{team?.experience}+ Years</p>
                  </div>

                  <div className="pl-2 text-[#333333] text-[13px] leading-[20px] font-normal flex items-center gap-2 ">
                    <FiMapPin />
                    <p>{team?.center?.name}</p>
                  </div>
                </div>

                <p className="mt-2 text-[#333333] font-medium text-[12px] leading-[100%] border-b-[0.35px] border-b-[#C8C8C8] pb-4 w-full text-center">
                  IVF | IUI | ICSI
                </p>

                <Link
                  href={`${PATHS.teamDetails}/${team?.slug}`}
                  className="hover:bg-transparent text-primary-500 inline-flex items-center gap-1 hover:text-primary-600 mt-3 text-[13px]  leading-[120%] tracking-[-2%] "
                >
                  View Profile
                  <ChevronRight className="size-[16px]" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="absolute flex items-center justify-end gap-3 -mt-6 w-fit right-4 md:right-20">
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
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default MeetOurExperts;
