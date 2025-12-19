"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
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
    <div className=" u-padding-x py-6 no-scrollbar bg-white bg-linear-to-l from-[#FFD2CE]/70 to-[#EBC0DB]/70">
      {/* Header */}
      <Heading title={data.title} subTitle={data.subtitle} />

      {/* Desktop Layout */}
      <div className="flex 2xl:justify-between overflow-x-auto">
        {data?.HowWorksDetails?.map((step, index) => (
          <StepCard
            activeStep={activeStep}
            index={index}
            setActiveStep={setActiveStep}
            stepTitle={step.title}
            key={step.id}
          />
        ))}
      </div>

      <StartJourneyButton handleAppointmentClick={handleAppointmentClick} />

      {/* Mobile Swiper Layout */}
      {/* <MobileSwiper
        activeStep={activeStep}
        data={data}
        setActiveStep={setActiveStep}
      /> */}

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

// Sub Component
const Heading = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 py-3 md:gap-3 lg:gap-5">
        <span className="bg-linear-to-r from-[#EBC0DB] to-[#FFD2CE] w-8 md:w-[4rem] lg:w-[8.5rem] h-0.5" />
        <h2 className="font-bold text-primary-500 text-xs md:text-sm lg:text-base uppercase tracking-wide md:tracking-[0.12rem] lg:tracking-[0.18rem] text-center px-2">
          {title}
        </h2>
        <span className="bg-linear-to-l from-[#EBC0DB] to-[#FFD2CE] w-8 md:w-[4rem] lg:w-[8.5rem] h-0.5" />
      </div>

      {/* Subtitle */}
      <p className="px-2 u-padding-b font-bold text-center text-text-500 text-lg md:text-2xl lg:typography-h2">
        {title}
      </p>
    </div>
  );
};

const StepCard = ({
  stepTitle,
  index,
  activeStep,
  setActiveStep,
}: {
  index: number;
  stepTitle: string;
  activeStep: number | null;
  setActiveStep: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="w-xl min-h-max overflow-hidden">
      <div className="mx-auto w-fit flex gap-4">
        {/* Step Circle */}
        <div className="flex flex-col items-center w-full max-w-[280px] h-52 gap-4 ">
          <button
            onClick={() => setActiveStep(activeStep === index ? null : index)}
            className="relative shrink-0 w-[120px] h-[120px] flex items-center justify-center cursor-pointer"
          >
            {/* Background */}
            <div className="absolute inset-0 rounded-full bg-[#FF6F6114]" />
            <div className="absolute border-8 border-white rounded-full inset-3" />

            {/* Animated Circle & Dot */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
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

          <p className="text-[#3A3A3A] text-[20px] text-center leading-[150%] tracking-[-3%]">
            {stepTitle || "Step Title"}
          </p>
        </div>
      </div>
    </div>
  );
};

const StartJourneyButton = ({
  handleAppointmentClick,
}: {
  handleAppointmentClick: () => void;
}) => {
  return (
    <button
      type="submit"
      onClick={handleAppointmentClick}
      className="flex items-center mx-auto text-primary-500 cursor-pointer mt-2 md:mt-12 lg:mt-14 font-urbanist font-semibold text-[1rem] *:leading-[120%] -tracking-[1%]"
    >
      Start Journey from here
    </button>
  );
};

const MobileSwiper = ({
  data,
  activeStep,
  setActiveStep,
}: {
  data: IHowWeWorkData;
  activeStep: number | null;
  setActiveStep: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="block lg:hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        slidesPerView={3}
        centeredSlides={false}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-primary-500",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary-600",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
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

              <p className="text-[#3A3A3A] text-sm md:text-base font-bold text-center leading-[150%] tracking-[-1%] mb-6">
                {step?.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HowWeWork;
