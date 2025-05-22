"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import VideoModal from "@/components/modals/VideoModal";
// import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IHomeData } from "../interface/home.interface";
const AnimatingLines = dynamic(() => import("./AnimatingLines"));
const HeroAnimationCarousel = dynamic(() => import("./HeroAnimationCarousel"), {
  ssr: false,
});
const HeroCardAnimation = dynamic(() => import("./HeroCardAnimation"), {
  ssr: false,
});
const HeroTextAnimation = dynamic(() => import("./HeroTextAnimation"), {
  ssr: false,
});

type HomeProps = {
  data?: IHomeData;
};
const HeroSection: React.FC<HomeProps> = ({ data }) => {
  const text = "Journey to <Parenthood,> /b Naturally and Compassionately";
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative flex justify-center h-full min-h-[45rem] overflow-y-hidden padding">
      <div className="flex flex-col justify-center mt-16 lg:mt-[8.72rem] w-full h-full text-left">
        <p className="relative font-bold text-primary-500 uppercase tracking-widest typography-paragraph-large">
          {data?.title}{" "}
        </p>
        <div className="pt-5">
          <HeroTextAnimation text={data?.subtitle || text} />
        </div>
        <h1
          className="mt-[0.88rem] max-w-2xl lg:font-[500] font-normal text-text-400 typography-paragraph-small lg:typography-paragraph-large"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />

        <div className="flex items-center gap-6 mt-[2.44rem] h-full">
          <button
            onClick={() => handleAppointmentClick()}
            className="z-[49] px-[2.75rem] py-[0.94rem] border-2 border-secondary-100 rounded-[100px] w-max font-bold text-white cursor-pointer typography-paragraph-regular lg:typography-h4"
            style={{
              background: "linear-gradient(90deg, #A0385A 0%, #3A142C 100%)",
              boxShadow: "0px 8px 18px 0px rgba(211, 163, 193, 0.77)",
            }}
          >
            Book an Appointment
          </button>
          <button
            onClick={() => setVideoModalOpen(true)}
            className="flex justify-center items-center p-[0.69rem] border border-secondary-800 rounded-full cursor-pointer shrink-0 grow-0"
          >
            <Image
              src={"/svg/play-icon.svg"}
              height={24}
              width={24}
              alt="Play icon"
              priority
              className="size-[1.11rem] text-secondary-900 translate-x-0.5"
            />
          </button>
        </div>
      </div>
      <div className="-bottom-10 lg:-bottom-36 z-10 absolute inset-x-0">
        <div className="relative w-full h-full overflow-x-hidden">
          <AnimatingLines />
          <Image
            src="/home/hero-bottom-background.png"
            alt="Illustration of circle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="right-0 left-0 lg:left-1/2 absolute inset-y-0">
        {data?.caroselImages && (
          <HeroAnimationCarousel
            onActiveIndexChange={(index) => setActiveIndex(index)}
          >
            {data.caroselImages.map((img, i) => (
              <div key={i} className="relative w-full h-full">
                <Image
                  width={1800}
                  height={2000}
                  alt={`Image ${i}`}
                  src={img}
                  className="block rounded-lg w-full h-full object-cover"
                />
                <HeroCardAnimation isActive={activeIndex === i} />
              </div>
            ))}
          </HeroAnimationCarousel>
        )}
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={
          "https://www.youtube.com/embed/sGAedr5C5FM?si=cibOMawH4JPqErOH"
        }
      />
    </div>
  );
};
export default HeroSection;
