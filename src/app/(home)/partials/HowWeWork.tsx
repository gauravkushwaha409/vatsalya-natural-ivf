"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IHowWeWorkData } from "../interface/howWeWork.interface";

type HowWeWorkProps = {
  data: IHowWeWorkData;
};

const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="mb-10 md:mb-20 padding">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 py-3 md:gap-3 lg:gap-5">
        <span className="bg-primary-500 w-8 md:w-[4rem] lg:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-xs md:text-sm lg:text-base uppercase tracking-wide md:tracking-[0.12rem] lg:tracking-[0.18rem] text-center px-2">
          {data?.title}
        </h2>
        <span className="bg-primary-500 w-8 md:w-[4rem] lg:w-[8.5rem] h-px" />
      </div>

      {/* Subtitle */}
      <p className="px-2 pb-2 md:px-4 md:pb-8 lg:pb-16 font-bold text-center text-text-500 text-lg md:text-2xl lg:typography-h2">
        {data?.subtitle}
      </p>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-8 flex-wrap">
        {data?.HowWorksDetails?.map((step, index) => (
          <div key={step?.id} className="flex gap-4 overflow-hidden">
            {/* Step Circle */}
            <div className="flex flex-col w-full max-w-[280px] h-52 gap-4 ">
              <button
                onClick={() =>
                  setActiveStep(activeStep === index ? null : index)
                }
                className="relative shrink-0 w-[120px] h-[120px] flex items-center justify-center cursor-pointer"
              >
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[#FF6F6114]" />
                <div className="absolute border-8 border-white rounded-full inset-3" />

                {/* Animated Circle & Dot */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 80 80"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#FF6F61"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 176,
                      strokeDashoffset: activeStep === index ? 0 : 176,
                      transition: "stroke-dashoffset 1.4s ease-in-out",
                      opacity: activeStep === index ? 1 : 0,
                      transformOrigin: "40px 40px",
                      transform: `rotate(${(index - 1) * 60 - 90}deg)`,
                    }}
                  />
                  {(() => {
                    const angle = (index - 1) * 60 - 90;
                    const radian = (angle * Math.PI) / 180;
                    const dotX = 40 + 28 * Math.cos(radian);
                    const dotY = 40 + 28 * Math.sin(radian);

                    return (
                      <circle
                        cx={dotX}
                        cy={dotY}
                        r="4"
                        fill="#FF6F61"
                        style={{
                          opacity: activeStep === index ? 0 : 1,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />
                    );
                  })()}
                </svg>

                {/* Step Number */}
                <span className="absolute text-[32px] font-extrabold text-[#FF6F61]">
                  {index + 1}
                </span>
              </button>

              <p className="text-[#3A3A3A] text-[20px] font-bold text-left leading-[150%] tracking-[-3%]">
                {step?.title || "Step Title"}
              </p>
            </div>

            {/* Connector */}
            {index < data?.HowWorksDetails?.length - 1 && (
              <div className="items-center flex -mt-20 shrink-0">
                <Image
                  src="/home/svg/connector.svg"
                  alt="connector line"
                  width={500}
                  height={500}
                  className="object-cover w-8 "
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={() => handleAppointmentClick()}
        className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 mx-auto font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 text-sm md:text-base lg:typography-paragraph-regular mt-2 md:mt-12 lg:mt-14"
      >
        Book your Appointment
      </button>

      {/* Mobile Swiper Layout */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={3}
          centeredSlides={false}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-primary-500",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-primary-600",
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="pb-12"
        >
          {data?.HowWorksDetails?.map((step, index) => (
            <SwiperSlide key={step?.id}>
              <div className="flex flex-col items-center gap-3 p-4">
                <button
                  onClick={() =>
                    setActiveStep(activeStep === index ? null : index)
                  }
                  className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center cursor-pointer"
                >
                  {/* Background */}
                  <div className="absolute inset-0 rounded-full bg-[#FF6F6114]" />
                  <div className="absolute border-4 md:border-6 border-white rounded-full inset-2" />

                  {/* Animated Circle & Dot */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 80 80"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="28"
                      fill="none"
                      stroke="#FF6F61"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 176,
                        strokeDashoffset: activeStep === index ? 0 : 176,
                        transition: "stroke-dashoffset 1.4s ease-in-out",
                        opacity: activeStep === index ? 1 : 0,
                        transformOrigin: "40px 40px",
                        transform: `rotate(${(index - 1) * 60 - 90}deg)`,
                      }}
                    />
                    {(() => {
                      const angle = (index - 1) * 60 - 90;
                      const radian = (angle * Math.PI) / 180;
                      const dotX = 40 + 28 * Math.cos(radian);
                      const dotY = 40 + 28 * Math.sin(radian);

                      return (
                        <circle
                          cx={dotX}
                          cy={dotY}
                          r="4"
                          fill="#FF6F61"
                          style={{
                            opacity: activeStep === index ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                          }}
                        />
                      );
                    })()}
                  </svg>

                  {/* Step Number */}
                  <span className="absolute text-xl md:text-2xl font-extrabold text-[#FF6F61]">
                    {index + 1}
                  </span>
                </button>

                <p className="text-[#3A3A3A] text-sm md:text-base font-bold text-center leading-[150%] tracking-[-1%] mb-6 md:mb-0">
                  {step?.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default HowWeWork;
