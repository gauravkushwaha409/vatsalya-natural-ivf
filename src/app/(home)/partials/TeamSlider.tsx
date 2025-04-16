"use client";

import { IOurExpertsRecord } from "@/app/our-team/interface/ourExperts.interface";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import RequestCallModal from "@/components/modals/RequestCallModal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TeamSliderProps {
  data: IOurExpertsRecord[];
}

const TeamSlider: React.FC<TeamSliderProps> = ({ data }) => {
  /**
   *
   * constants for the slider
   *
   */
  const ACTIVE_EL_WIDTH = 30;
  const ACTIVE_EL_HEIGHT = 38.3331;
  const INACTIVE_EL_WIDTH = 11.25;
  const INACTIVE_EL_HEIGHT = 14.375;
  const GAP = 1.25;
  const ACTIVE_INDEX = 1;

  const previousActiveIndex = useRef(0);
  const shouldAnimate = useRef(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] =
    useState<boolean>(false);
  const [isOpenRequestCallModal, setIsOpenRequestCallModal] =
    useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<string | undefined>();
  const [selectedCenter, setSelectedCenter] = useState<string | undefined>();
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] =
    useState<boolean>(false);
  const [isOpenRequestCallModal, setIsOpenRequestCallModal] =
    useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<string | undefined>();
  const [selectedCenter, setSelectedCenter] = useState<string | undefined>();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (!shouldAnimate.current) return prev;
        previousActiveIndex.current = prev;
        return (prev + 1) % data?.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <div className="hidden lg:block">
        <div
          style={{
            minHeight: `${ACTIVE_EL_HEIGHT}rem`,
          }}
          className="relative flex items-end gap-[1.25rem] mx-6 lg:mx-20 overflow-hidden"
        >
          {data?.map((member, index) => {
            const i =
              (index -
                ((activeIndex - ACTIVE_INDEX) % data.length) +
                data.length) %
              data.length;
            return (
              // <div key={index} className="flex w-full h-full">
              <div
                key={index}
                style={{
                  height:
                    activeIndex == index
                      ? `${ACTIVE_EL_HEIGHT}rem`
                      : `${INACTIVE_EL_HEIGHT}rem`,
                  width:
                    activeIndex == index
                      ? `${ACTIVE_EL_WIDTH}rem`
                      : `${INACTIVE_EL_WIDTH}rem`,
                  left:
                    i <= ACTIVE_INDEX
                      ? `${i * INACTIVE_EL_WIDTH + GAP * i}rem`
                      : `${
                          i * INACTIVE_EL_WIDTH +
                          (ACTIVE_EL_WIDTH - INACTIVE_EL_WIDTH) +
                          GAP * i
                        }rem`,
                  borderRadius: activeIndex == index ? "2.331rem" : "0.875rem",
                }}
                className={`absolute bottom-0 left-0 z-10 overflow-hidden  ${
                  i == data.length - 1 ? "" : "transition-all duration-500"
                } ease-in-out `}
              >
                <Image
                  src={member?.image}
                  alt={member?.name}
                  height={2000}
                  width={1000}
                  className="w-full h-full object-cover grow"
                />
              </div>
            );
          })}
          {/* Description */}
          <div
            onMouseEnter={() => (shouldAnimate.current = false)}
            onMouseLeave={() => (shouldAnimate.current = true)}
            key={activeIndex}
            style={{
              left: `${ACTIVE_EL_WIDTH + GAP + INACTIVE_EL_WIDTH}rem`,
            }}
            className={`top-0 left-full absolute space-y-3 starting:opacity-0 ml-10 w-[32.4rem] transition-all duration-700 ease-in-out `}
          >
            <h1 className="font-semibold typography-h3">
              {data[activeIndex]?.name}
            </h1>
            <h2 className="font-semibold text-text-500 typography-paragraph-large">
              {data[activeIndex]?.position}
            </h2>
            <p
              className="font-medium text-text-300 typography-paragraph-regular"
              dangerouslySetInnerHTML={{
                __html: data[activeIndex]?.description,
              }}
            />

            <p
              className="font-medium text-text-300 typography-paragraph-regular"
              dangerouslySetInnerHTML={{
                __html: data[activeIndex]?.description,
              }}
            />

            <div>
              <button
                onClick={() => {
                  setIsOpenAppointmentModal(true);
                  setSelectDoctor(data[activeIndex]?.id);
                  setSelectedCenter(data[activeIndex]?.center?.id);
                }}
                className="px-8 py-3 border border-secondary-500 rounded-full font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
              >
              <button
                onClick={() => {
                  setIsOpenAppointmentModal(true);
                  setSelectDoctor(data[activeIndex]?.id);
                  setSelectedCenter(data[activeIndex]?.center?.id);
                }}
                className="px-8 py-3 border border-secondary-500 rounded-full font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
              >
                Consult Now
              </button>
              <button
                onClick={() => setIsOpenRequestCallModal(true)}
                className="px-5 py-3 font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
              >
              <button
                onClick={() => setIsOpenRequestCallModal(true)}
                className="px-5 py-3 font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
              >
                Call Back Request
              </button>
              <Link
                href={"/ourExperts/profile"}
                className="px-8 py-3 font-medium text-secondary-500 typography-paragraph-regular"
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => (shouldAnimate.current = false)}
          onMouseLeave={() => (shouldAnimate.current = true)}
          className="flex justify-center items-center mt-5"
        >
          <button
            onClick={() => {
              previousActiveIndex.current = activeIndex;
              setActiveIndex(
                (prev) => (prev - 1 + data?.length) % data?.length
              );
            }}
            className="flex justify-center items-center rounded-full w-10 h-10 text-primary-500 cursor-pointer"
          >
            {" "}
            <ArrowLeft size={20} />
          </button>
          {Array.from({ length: data?.length }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-primary-500 inline-block mx-1 ${
                i === activeIndex ? "opacity-100" : "opacity-50"
              }`}
            ></div>
          ))}
          <button
            onClick={() => {
              previousActiveIndex.current = activeIndex;
              setActiveIndex((prev) => (prev + 1) % data.length);
            }}
            className="flex justify-center items-center rounded-full w-10 h-10 text-primary-500 cursor-pointer"
          >
            {" "}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="lg:hidden px-4">
        <MobileTeamSlider data={data} />
      </div>
      <RequestAppoimentModal
        isOpen={isOpenAppointmentModal}
        setIsOpen={setIsOpenAppointmentModal}
        onClose={() => setIsOpenAppointmentModal(false)}
        selectDoctor={selectDoctor}
        selectedCenter={selectedCenter}
      />
      <RequestCallModal
        isOpen={isOpenRequestCallModal}
        setIsOpen={setIsOpenRequestCallModal}
        onClose={() => setIsOpenRequestCallModal(false)}
      />
      <RequestAppoimentModal
        isOpen={isOpenAppointmentModal}
        setIsOpen={setIsOpenAppointmentModal}
        onClose={() => setIsOpenAppointmentModal(false)}
        selectDoctor={selectDoctor}
        selectedCenter={selectedCenter}
      />
      <RequestCallModal
        isOpen={isOpenRequestCallModal}
        setIsOpen={setIsOpenRequestCallModal}
        onClose={() => setIsOpenRequestCallModal(false)}
      />
    </>
  );
};
export default TeamSlider;

const MobileTeamSlider: React.FC<TeamSliderProps> = ({ data }) => {
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] =
    useState<boolean>(false);
  const [isOpenRequestCallModal, setIsOpenRequestCallModal] =
    useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<string | undefined>();
  const [selectedCenter, setSelectedCenter] = useState<string | undefined>();
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] =
    useState<boolean>(false);
  const [isOpenRequestCallModal, setIsOpenRequestCallModal] =
    useState<boolean>(false);
  const [selectDoctor, setSelectDoctor] = useState<string | undefined>();
  const [selectedCenter, setSelectedCenter] = useState<string | undefined>();
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={10}
      >
        {data.map((member, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center gap-3 pb-5"
          >
            <Image
              src={member.image}
              alt={member.name}
              height={2000}
              width={1000}
              className="w-full h-full object-cover grow"
            />
            <div className="space-y-3 mt-4">
              <h1 className="flex items-center font-semibold text-primary-400 typography-h3">
                {member.name}
                {/* <ExternalLink className="inline-block ml-2 text-sm" /> */}
              </h1>
              <h2 className="font-semibold text-text-500 typography-paragraph-large">
                {member.position}
              </h2>
              <p className="font-medium text-text-300 typography-paragraph-regular">
                {member.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => {
                    setIsOpenAppointmentModal(true);
                    setSelectDoctor(member.id);
                    setSelectedCenter(member.center?.id);
                  }}
                  className="px-3 py-1 border border-secondary-500 rounded-full font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
                >
                  Consult Now
                </button>
                <button className="font-medium text-secondary-500 typography-paragraph-regular cursor-pointer">
                  Call Back Request
                </button>
                <Link
                  href={"/ourExperts/profile"}
                  className="px-2 font-medium text-secondary-500 typography-paragraph-regular"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <RequestAppoimentModal
        isOpen={isOpenAppointmentModal}
        setIsOpen={setIsOpenAppointmentModal}
        onClose={() => setIsOpenAppointmentModal(false)}
        selectDoctor={selectDoctor}
        selectedCenter={selectedCenter}
      />
      <RequestCallModal
        isOpen={isOpenRequestCallModal}
        setIsOpen={setIsOpenRequestCallModal}
        onClose={() => setIsOpenRequestCallModal(false)}
      />
    </>
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={10}
      >
        {data.map((member, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center gap-3 pb-5"
          >
            <Image
              src={member.image}
              alt={member.name}
              height={2000}
              width={1000}
              className="w-full h-full object-cover grow"
            />
            <div className="space-y-3 mt-4">
              <h1 className="flex items-center font-semibold text-primary-400 typography-h3">
                {member.name}
                {/* <ExternalLink className="inline-block ml-2 text-sm" /> */}
              </h1>
              <h2 className="font-semibold text-text-500 typography-paragraph-large">
                {member.position}
              </h2>
              <p className="font-medium text-text-300 typography-paragraph-regular">
                {member.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => {
                    setIsOpenAppointmentModal(true);
                    setSelectDoctor(member.id);
                    setSelectedCenter(member.center?.id);
                  }}
                  className="px-3 py-1 border border-secondary-500 rounded-full font-medium text-secondary-500 typography-paragraph-regular cursor-pointer"
                >
                  Consult Now
                </button>
                <button className="font-medium text-secondary-500 typography-paragraph-regular cursor-pointer">
                  Call Back Request
                </button>
                <Link
                  href={"/ourExperts/profile"}
                  className="px-2 font-medium text-secondary-500 typography-paragraph-regular"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <RequestAppoimentModal
        isOpen={isOpenAppointmentModal}
        setIsOpen={setIsOpenAppointmentModal}
        onClose={() => setIsOpenAppointmentModal(false)}
        selectDoctor={selectDoctor}
        selectedCenter={selectedCenter}
      />
      <RequestCallModal
        isOpen={isOpenRequestCallModal}
        setIsOpen={setIsOpenRequestCallModal}
        onClose={() => setIsOpenRequestCallModal(false)}
      />
    </>
  );
};
