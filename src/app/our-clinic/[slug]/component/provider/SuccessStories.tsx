"use client";
import { useSlider } from "@/components/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface ISuccessStories {
  description: string;
  author: string;
  title: string;
}

const SuccessStories = ({ data }: { data: ISuccessStories[] }) => {
  const {
    activeIndex,
    goNext,
    goPrev,
    goToSlide,
    handleSlideChange,
    setActiveIndex,
    swiperRef,
  } = useSlider();
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  return (
    <div className="u-padding-x u-padding-y">
      <Heading />
      <StoriesSwapper
        data={data}
        handleSlideChange={handleSlideChange}
        swiperRef={swiperRef}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
      />
      <NavigationButton
        goNext={goNext}
        goPrev={goPrev}
        isBeginning={isBeginning}
        isEnd={isEnd}
      />
    </div>
  );
};

const StoriesSwapper = ({
  swiperRef,
  handleSlideChange,
  setIsBeginning,
  setIsEnd,
  data,
}: {
  data: ISuccessStories[];
  swiperRef: React.RefObject<SwiperRef | null>;
  handleSlideChange: () => void;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const defaultStories: ISuccessStories[] = data ?? [
    {
      title: "IUI Journey",
      description:
        "The team at Biratnagar made our journey so much easier. Their compassion and expertise gave us hope when we needed it most. We are forever grateful for their support.",
      author: "M.K., Biratnagar",
    },
  ];
  return (
    <div className="relative">
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
        spaceBetween={100}
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
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 1,
          //     spaceBetween: 24,
          //   },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        className="w-full custom-swiper"
      >
        {defaultStories?.map((team, index) => (
          <SwiperSlide key={team.author + index}>
            <StoriesCard
              author={team.author}
              description={team.description}
              title={team.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-x-4">
        <span className="h-[1px] block flex-1 bg-linear-to-r from-[#EBC0DB] to-[#FFD2CE]" />
        <p className="font-urbanist text-[1rem] font-semibold leading-[150%] tracking-[20%]">
          Patient Stories
        </p>
        <span className="h-[1px] block flex-1 bg-linear-to-l from-[#EBC0DB] to-[#FFD2CE]" />
      </div>

      <p className="font-urbanist font-bold text-[33px] leading-[150%] text-[#2E2E2E] text-center">
        Stories From Biratnagar
      </p>
    </div>
  );
};

const StoriesCard = ({ author, description, title }: ISuccessStories) => {
  return (
    <div className="w-full border border-primary-400 rounded-[28px] p-8 space-y-8">
      <p className="typo-xl-bd-reg text-[#364153]">{description}</p>
      <div className="flex items-center justify-between">
        <span className="typo-lg-bd-reg text-[#101828]">{author}</span>
        <span className="typo-sm-bd-reg text-[#4A5565]">{title}</span>
      </div>
    </div>
  );
};

const NavigationButton = ({
  goNext,
  goPrev,
  isBeginning,
  isEnd,
}: {
  goPrev: () => void;
  goNext: () => void;
  isBeginning: boolean;
  isEnd: boolean;
}) => {
  return (
    <div className="absolute z-10 flex items-center justify-end gap-3 mt-2 lg:-mt-6 w-fit right-4 md:right-20">
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
  );
};
export default SuccessStories;
