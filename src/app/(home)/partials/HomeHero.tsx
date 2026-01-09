"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { useRef, useState } from "react";
import { IHomeData } from "../interface/home.interface";
import ButterflyAnimation from "./ButterflyAnimation";

type HomeProps = {
  data?: IHomeData;
};

const HomeHero: React.FC<HomeProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const textContentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="relative flex lg:flex-row flex-col items-center lg:h-[660px] min-h-[500px] md:min-h-[600px] overflow-hidden">
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
        <VideoBlendGradient />

        {/* Background Gradient Layer */}
        <GradientLayer />

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
          ? "z-30 top-0 bg-linear-to-b from-background-100 to-transparent"
          : "z-30 bottom-0 bg-linear-to-t from-background-100 to-transparent"
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
    <div className="z-30 relative order-2 lg:order-none px-4 pt-8 md:pt-12 lg:pt-0 lg:w-[45%] realtive u-padding-l shrink-0">
      <h1 className="mb-4 w-full max-w-xl font-extrabold text-[#A0377B] lg:text-[44px] xl:text-[52px] text-2xl md:text-3xl leading-snug md:leading-tight lg:leading-[114.999%] /">
        {title}
      </h1>

      {description && (
        <div
          className="w-full max-w-xl font-medium text-[#787878] lg:text-[15px] text-sm md:text-base leading-relaxed lg:leading-[180%]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
      <div className="top-8 right-24 md:right-8 absolute -translate-y-1/2 md:translate-x-1/2">
        <ButterflyAnimation />
      </div>
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
      className="bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] hover:shadow-[0px_12px_24px_0px_rgba(101,53,83,0.8)] mt-6 md:mt-8 mb-12 lg:mb-0 px-6 md:px-8 py-3 md:py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer typography-paragraph-regular"
    >
      Book Your Appointment
    </button>
  );
};

const BackgroundVideoSection = () => {
  return (
    <div className="z-10 lg:z-0 absolute inset-y-0 lg:inset-0 order-1 lg:order-none w-full lg:translate-x-[25%]">
      <video
        src="/home/video.mp4"
        autoPlay
        muted
        loop
        controls={false}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const GradientLayer = () => {
  return (
    <div className="left-0 z-20 absolute bg-background-100 blur-[100px] border border-red-600 w-1/2 h-340" />
  );
};

const VideoBlendGradient = () => {
  return (
    <div className="top-0 right-0 bottom-0 left-0 lg:left-0 z-15 lg:z-20 absolute lg:inset-y-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFEDEC]/50 md:from-[#FFEDEC] via-[#FFE8E7]/30 md:via-[#FFE8E7]/40 to-transparent lg:to-transparent w-full lg:w-auto" />
  );
};

export default HomeHero;
