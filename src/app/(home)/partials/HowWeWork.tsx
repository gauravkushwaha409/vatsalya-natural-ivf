"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IHowWeWorkData } from "../interface/howWeWork.interface";
import { useSlider } from "@/components/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="bg-white bg-linear-to-l from-[#FFD2CE]/70 to-[#EBC0DB]/70 py-6 u-padding-x no-scrollbar">
      {/* Header */}
      <Heading title={data.title} subTitle={data.subtitle} />

      {/* Desktop Layout */}
      {/* <div className="hidden lg:flex 2xl:justify-between overflow-x-auto">
        {data?.HowWorksDetails?.map((step, index) => (
          <StepCard
            activeStep={activeStep}
            index={index}
            setActiveStep={setActiveStep}
            stepTitle={step.title}
            key={step.id}
          />
        ))}
      </div> */}
      {/* Mobile Swiper Layout */}
      <MobileSwiper
        activeStep={activeStep}
        data={data}
        setActiveStep={setActiveStep}
      />

      <StartJourneyButton handleAppointmentClick={handleAppointmentClick} />

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
      <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-5 py-3">
        <span className="bg-linear-to-r from-[#EBC0DB] to-[#FFD2CE] w-8 md:w-[4rem] lg:w-[8.5rem] h-0.5" />
        <h2 className="px-2 font-bold text-primary-500 text-xs md:text-sm lg:text-base text-center uppercase md:tracking-[0.12rem] lg:tracking-[0.18rem] tracking-wide">
          {title}
        </h2>
        <span className="bg-linear-to-l from-[#EBC0DB] to-[#FFD2CE] w-8 md:w-[4rem] lg:w-[8.5rem] h-0.5" />
      </div>

      {/* Subtitle */}
      <p className="px-2 font-bold text-text-500 text-lg md:text-2xl text-center u-padding-b lg:typography-h2">
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
      <div className="flex gap-4 mx-auto w-fit">
        {/* Step Circle */}
        <div
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setActiveStep(activeStep === index ? null : index);
          }}
          className="flex flex-col items-center gap-4 w-full max-w-[280px] h-52"
        >
          <button className="relative flex justify-center items-center w-[120px] h-[120px] cursor-pointer shrink-0">
            {/* Background */}
            <div className="absolute inset-0 bg-[#FF6F6114] rounded-full" />
            <div className="absolute inset-3 border-8 border-white rounded-full" />

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
            <span className="absolute font-extrabold text-[#FF6F61] text-[32px]">
              {index + 1}
            </span>
          </button>

          <p className="text-[#3A3A3A] text-[18px] text-center leading-[150%] tracking-[-3%]">
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
      className="group flex items-center gap-2 hover:drop-shadow-xs mx-auto mt-2 md:mt-12 lg:mt-14 font-urbanist font-semibold text-[1rem] text-primary-500 *:leading-[120%] -tracking-[1%] active:scale-95 transition-all hover:-translate-y-0.5 duration-300 ease-in-out cursor-pointer"
    >
      <span>Start Journey from here</span>
      <ArrowRight
        size={14}
        className="transition-transform group-hover:translate-x-0.5 duration-300"
      />
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
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();
  return (
    <div className="block">
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
          spaceBetween={8}
          slidesPerView={3}
          centeredSlides={false}
          onSlideChange={(swiper) => {
            handleSlideChange();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          autoplay={{ delay: 5000 }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="pb-12 custom-swiper"
        >
          {data?.HowWorksDetails?.map((step, index) => (
            <SwiperSlide key={step?.id}>
              <div className="flex flex-col items-center gap-3 p-4">
                <div
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.preventDefault();
                    setActiveStep(activeStep === index ? null : index);
                  }}
                  className="relative flex justify-center items-center w-24 md:w-28 h-24 md:h-28 cursor-pointer"
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-[#FF6F6114] rounded-full" />
                  <div className="absolute inset-2 border-4 border-white md:border-6 rounded-full" />

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
                  <span className="absolute font-extrabold text-[#FF6F61] text-xl md:text-2xl">
                    {index + 1}
                  </span>
                </div>

                <p className="mb-6 font-bold text-[#3A3A3A] text-sm md:text-base text-center leading-[150%] tracking-[-1%]">
                  {step?.title}
                </p>
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
      </>
    </div>
  );
};

export default HowWeWork;
