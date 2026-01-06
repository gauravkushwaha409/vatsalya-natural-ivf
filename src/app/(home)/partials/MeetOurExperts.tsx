"use client";
import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import { useSlider } from "@/components/hooks/useSlider";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import useUpdateQuery from "@/hooks/useUpdateQuerry";
import { ICenterRoot } from "@/interface/center";
import PATHS from "@/utils/path";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MeetExpertsProps {
  data: IOurExpertsData;
  center: ICenterRoot;
  centerParams: string | null;
}

const MeetOurExperts: React.FC<MeetExpertsProps> = ({
  data,
  center,
  centerParams,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("");
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <div className="bg-background-100 pb-10 md:pb-20 u-padding-x">
      <Heading />
      <ExpertLocations data={center} centerParams={centerParams} />

      <div className="relative">
        <ButterflyImage />

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
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full custom-swipe"
        >
          {data?.records?.map((team) => (
            <SwiperSlide key={team.id}>
              <ExpertCard
                id={team?.id}
                image={team?.image}
                name={team?.name}
                center={team?.center?.name}
                experience={team?.experience}
                position={team?.position}
                slug={team?.slug}
                setOpenModal={setOpenModal}
                selectedCenter={team?.center?.id}
                selectedDoctor={team?.id}
                setSelectedCenter={setSelectedCenter}
                setSelectedDoctor={setSelectedDoctor}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Navigation Buttons */}
        <NavigationButton
          isBeginning={isBeginning}
          isEnd={isEnd}
          goPrev={goPrev}
          goNext={goNext}
        />

        {/* Book Appointment Button */}
        {/* <BookAppointment handleAppointmentClick={handleAppointmentClick} /> */}
      </div>
      {/* Appointment Modal */}
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectDoctor={selectedDoctor}
        selectedCenter={selectedCenter}
      />
    </div>
  );
};

export default MeetOurExperts;

const Heading = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center gap-3 md:gap-5 py-3">
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          MEET OUR EXPERTS
        </h2>
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
      </div>

      {/* Subtitle */}
      <p className="px-4 pb-2 md:pb-16 lg:pb-8 font-bold text-text-500 text-center typography-h2">
        World-Class Doctors, Dedicated to Your Care
      </p>
    </React.Fragment>
  );
};

const ExpertLocations = ({
  data,
  centerParams,
}: {
  data: ICenterRoot;
  centerParams: string | null;
}) => {
  const [filterValue, setFilterValue] = useState(centerParams ?? "all");
  const updateQuerry = useUpdateQuery();
  const handleClickLocation = (value: string) => {
    if (!value) return;
    updateQuerry("center", value);
    setFilterValue(value);
  };
  return (
    <div className="flex sm:flex-row flex-col flex-wrap justify-end sm:items-center gap-2 mb-5 w-full">
      <button
        onClick={() => handleClickLocation("all")}
        className={`typo-sm-bd-reg px-2 py-1 rounded-md border transition-all duration-200 ease-in-out active:scale-95 min-w-16 ${
          filterValue === "all"
            ? "lg:border-primary-500 text-primary-500 bg-primary-50/30"
            : " border-none lg:border-transparent text-text-200 hover:border-gray-200 hover:text-text-500"
        }`}
      >
        All
      </button>

      {data?.data?.records?.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClickLocation(item.id)}
          className={`typo-sm-bd-reg px-2 py-1 rounded-md border transition-all duration-200 ease-in-out active:scale-95 min-w-16 ${
            filterValue === item.id
              ? "lg:border-primary-500 text-primary-500 bg-primary-50/30"
              : "border-none lg:border-transparent text-text-200 hover:border-gray-200 hover:text-text-500"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

// Slider Navigation
const NavigationButton = ({
  goPrev,
  goNext,
  isBeginning,
  isEnd,
}: {
  goPrev: () => void;
  goNext: () => void;
  isBeginning: boolean;
  isEnd: boolean;
}) => {
  return (
    <div className="right-4 md:right-20 z-10 absolute flex justify-end items-center gap-3 mt-2 w-fit">
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

const BookAppointment = ({
  handleAppointmentClick,
}: {
  handleAppointmentClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={handleAppointmentClick}
      className="flex items-center gap-3 bg-secondary-500 mx-auto mt-14 px-8 py-4 border border-secondary-200 rounded-full font-extrabold text-white cursor-pointer typography-paragraph-regular"
    >
      Book your Appointment
    </button>
  );
};

const ButterflyImage = () => {
  return (
    <div className="-top-3 lg:-top-18 -left-18 lg:-left-38 absolute w-42 lg:w-[200px] h-42 lg:h-[200px]">
      <Image
        src="/svg/butterfly.svg"
        alt="Butterfly"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const ExpertCard = ({
  id,
  center,
  experience,
  image,
  name,
  position,
  slug,
  setOpenModal,
  setSelectedCenter,
  setSelectedDoctor,
  selectedCenter,
  selectedDoctor,
}: {
  id: string;
  image: string;
  name: string;
  position: string;
  experience: number;
  center: string;
  slug: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDoctor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCenter: React.Dispatch<React.SetStateAction<string>>;
  selectedDoctor: string;
  selectedCenter: string;
}) => {
  return (
    <div className="flex flex-col items-center bg-[#FFD2CE38] px-8 py-5 rounded-[42px]">
      <div className="mb-6 w-[214px] h-[250px]">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-semibold text-[#1E1E1E] text-[21px] leading-[150%] tracking-[-3%]">
        {name}
      </p>
      <p className="mb-3.5 font-normal text-[#646464] text-[11px] leading-[100%]">
        {position}
      </p>

      <div className="flex items-center">
        <div className="flex items-center gap-2 pr-2 border-r-[#D4D4D4] border-r-[0.5px] font-normal text-[#333333] text-[13px] leading-[20px]">
          <IoBagOutline />
          <p>{experience}+ Years</p>
        </div>

        <div className="flex items-center gap-2 pl-2 font-normal text-[#333333] text-[13px] leading-[20px]">
          <FiMapPin />
          <p>{center}</p>
        </div>
      </div>

      <p className="mt-2 w-full font-medium text-[#333333] text-[12px] text-center leading-[100%]">
        IVF | IUI | ICSI
      </p>
      <div className="flex justify-between items-center mt-4 w-full">
        <Link
          href={`${PATHS.teamDetails}/${slug}`}
          className="inline-flex items-center gap-1 hover:bg-transparent text-[13px] text-primary-500 hover:text-primary-600 leading-[120%] tracking-[-2%]"
        >
          View Profile
          <ChevronRight className="size-[16px]" />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
            setSelectedDoctor(selectedDoctor);
            setSelectedCenter(selectedCenter);
          }}
          className="px-4 py-1.5 border border-primary-500 rounded-full text-[13px] text-primary-500 leading-[120%] tracking-[-2%]"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};
