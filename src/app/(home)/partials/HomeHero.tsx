"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
import { IHomeData } from "../interface/home.interface";

type HomeProps = {
  data?: IHomeData;
};

const HomeHero: React.FC<HomeProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center min-h-[500px] md:min-h-[600px] lg:h-[660px] overflow-hidden">
        {/* Top Overlay Gradient */}
        <GradientOverlay position="top" />

        {/* Text Section */}
        <TextContent
          description={
            data?.description ??
            "Nepal's No. 1 IVF center, providing advanced infertility treatments with over 15 years of expertise to guide you on your journey to parenthood."
          }
          title={data?.subtitle ?? "We transform hope within you into life"}
          handleAppointmentClick={handleAppointmentClick}
        />

        {/* Video Section with Gradient Mask */}
        <BackgroundVideoSection />

        <Butterfly />

        {/* Background Gradient Layer */}
        <GradientLayer />

        {/* Enhanced Gradient Overlay for Video Blending */}
        <VideoBlendGradient />

        {/* Bottom Overlay Gradient */}
        <GradientOverlay position="bottom" />
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

const GradientOverlay = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div
      className={`absolute z-10 h-27 inset-x-0 ${
        position === "top"
          ? "top-0 bg-linear-to-b from-[#FFE8E7] to-transparent"
          : "bottom-0 bg-linear-to-t from-[#FFE8E7] to-transparent"
      }`}
    />
  );
};

const TextContent = ({
  handleAppointmentClick,
  title,
  description,
}: {
  handleAppointmentClick: () => void;
  title: string;
  description: string;
}) => {
  return (
    <div className="u-padding-l lg:w-[45%] shrink-0 z-30 relative pt-8 md:pt-12 lg:pt-0 px-4  order-2 lg:order-none">
      <h1 className="text-2xl md:text-4xl lg:text-[52px] leading-tight lg:leading-[114.999%] font-extrabold mb-4 md:mb-6 lg:mb-4 text-[#A0377B] max-w-xl w-full">
        {title}
      </h1>

      {description && (
        <div
          className="text-[#787878] text-sm md:text-base lg:text-[15px] leading-relaxed lg:leading-[180%] font-medium  max-w-xl w-full"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}

      {/* Book Appointment Button */}
      <BookAppointment handleAppointmentClick={handleAppointmentClick} />
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
      onClick={handleAppointmentClick}
      className="bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-6 md:px-8 py-3 md:py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-all duration-300 text-white cursor-pointer typography-paragraph-regular hover:shadow-[0px_12px_24px_0px_rgba(101,53,83,0.8)] mt-6 md:mt-8 mb-12 lg:mb-0"
    >
      Book Your Appointment
    </button>
  );
};

const BackgroundVideoSection = () => {
  return (
    <div className="relative lg:absolute lg:translate-x-[12%] lg:inset-0 w-full h-80 md:h-96 lg:h-[660px] z-10 lg:z-0 order-1 lg:order-none">
      <video
        src="/home/video.mp4"
        autoPlay
        muted
        loop
        controls={false}
        className="object-cover w-full h-full"
      />
      {/* Video Gradient Mask for Better Blending */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFEDEC]/40 md:from-[#FFEDEC]/70 via-transparent to-transparent mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-[#FFEDEC]/30 md:from-transparent via-[#FFEDEC]/20 md:via-transparent to-transparent md:to-[#FFEDEC]/40"></div>
    </div>
  );
};

const GradientLayer = () => {
  return (
    <div className="absolute inset-0 w-full lg:!w-[58%] bg-gradient-to-b md:bg-gradient-to-r from-[#FFEDEC]/80 md:from-[#FFEDEC] via-[#FFE8E7]/60 md:via-[#FFE8E7] to-transparent z-5 lg:z-10" />
  );
};

const Butterfly = () => {
  return (
    <div className="hidden lg:block w-24 h-24 md:w-32 md:h-32 lg:w-[245px] lg:h-[243px] absolute -top-4 -left-4 md:-top-6 md:-left-8 lg:-top-10 lg:-left-26 z-21">
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

const VideoBlendGradient = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 lg:left-0 lg:inset-y-0 w-full lg:w-auto bg-gradient-to-t md:bg-gradient-to-r from-[#FFEDEC]/50 md:from-[#FFEDEC] via-[#FFE8E7]/30 md:via-[#FFE8E7]/40 to-transparent lg:to-transparent z-15 lg:z-20" />
  );
};

export default HomeHero;
