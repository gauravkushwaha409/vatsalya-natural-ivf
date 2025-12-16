"use client";
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
import { IClinicDetailsExpert } from "../interface/clinicDetails.interface";

interface MeetExpertsProps {
  expertRecord: IClinicDetailsExpert[];
  location: string;
}

const ClinicExpert: React.FC<MeetExpertsProps> = ({
  expertRecord,
  location,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("");
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();

  return (
    <div className="pb-10 md:pb-20 padding bg-background-100">
      <Heading />

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
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full custom-swiper"
        >
          {expertRecord?.map((team) => (
            <SwiperSlide key={team.id}>
              <ExpertCard
                id={team?.id}
                image={team?.image}
                name={team?.name}
                center={location}
                experience={team?.experience}
                position={team?.position}
                slug={team?.slug}
                setOpenModal={setOpenModal}
                selectedCenter={team?.center}
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
        <BookAppointment handleAppointmentClick={handleAppointmentClick} />
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

export default ClinicExpert;

const Heading = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center gap-3 py-3 md:gap-5">
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          MEET OUR EXPERTS
        </h2>
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
      </div>

      {/* Subtitle */}
      <p className="px-4 pb-2 lg:pb-8 font-bold text-center md:pb-16 text-text-500 typography-h2">
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
    <div className="flex flex-col justify-end w-full gap-3 mb-5 sm:w-full sm:flex-row sm:items-center">
      <button
        onClick={() => {
          handleClickLocation("all");
        }}
        className={`typo-mid-bd-md ${
          filterValue === "all" ? "text-primary-500" : "text-text-200"
        }`}
      >
        All
      </button>

      {data?.data?.records?.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            handleClickLocation(item.id);
          }}
          className={`typo-mid-bd-md ${
            filterValue === item.id ? "text-primary-500" : "text-text-200"
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

const BookAppointment = ({
  handleAppointmentClick,
}: {
  handleAppointmentClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={handleAppointmentClick}
      className="flex items-center gap-3 px-8 py-4 mx-auto font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular mt-14"
    >
      Book your Appointment
    </button>
  );
};

const ButterflyImage = () => {
  return (
    <div className="w-42 h-42 lg:w-[200px] lg:h-[200px] absolute -top-3 -left-18 lg:-top-18 lg:-left-38">
      <Image
        src="/svg/butterfly.svg"
        alt="Butterfly"
        width={100}
        height={100}
        className="object-cover w-full h-full"
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
    <div className="bg-[#FFD2CE38] rounded-[42px] py-5 px-8 flex flex-col items-center">
      <div className="w-[214px] h-[250px] mb-6">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-[#1E1E1E] font-semibold text-[21px] leading-[150%] tracking-[-3%]">
        {name}
      </p>
      <p className="text-[#646464] font-normal text-[11px] leading-[100%] mb-3.5">
        {position}
      </p>

      <div className="flex items-center ">
        <div className="text-[#333333] text-[13px] leading-[20px] font-normal flex items-center gap-2 border-r-[0.5px] border-r-[#D4D4D4] pr-2">
          <IoBagOutline />
          <p>{experience}+ Years</p>
        </div>

        <div className="pl-2 text-[#333333] text-[13px] leading-[20px] font-normal flex items-center gap-2 ">
          <FiMapPin />
          <p>{center}</p>
        </div>
      </div>

      <p className="mt-2 w-full text-[#333333] font-medium text-[12px] leading-[100%] text-center">
        IVF | IUI | ICSI
      </p>
      <div className="w-full mt-4 flex items-center justify-between">
        <Link
          href={`${PATHS.teamDetails}/${slug}`}
          className="hover:bg-transparent text-primary-500 inline-flex items-center gap-1 hover:text-primary-600 text-[13px] leading-[120%] tracking-[-2%] "
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
          className="px-4 py-1.5 text-primary-500 rounded-full border border-primary-500 text-[13px] leading-[120%] tracking-[-2%]"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};
