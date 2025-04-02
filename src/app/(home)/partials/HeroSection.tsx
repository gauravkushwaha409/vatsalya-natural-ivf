"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import CalendarModal from "../modals/CalenderModal";
import HeroAnimationCarousel from "./HeroAnimationCarousel";
import HeroTextAnimation from "./HeroTextAnimation";

const HeroSection = () => {
  const text = "Journey to <parenthood,> /b Naturally and Compassionately";
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="relative flex justify-center pl-20 h-full min-h-screen overflow-y-hidden">
      <div className="flex flex-col justify-center mt-[8.72rem] w-full h-full text-left">
        <h2 className="font-bold text-primary-500 uppercase tracking-wide typography-paragraph-large">
          Natural IVF
        </h2>
        <div className="relative pt-5">
          <HeroTextAnimation text={text} />
          <motion.div
            initial={{
              rotate: 90,
              top: "120%",
              left: 0,
            }}
            animate={{
              rotate: [
                90, 89, 88, 90, 75, 65, 55, 50, 45, 30, 15, 0, -20, -30, -45,
              ],
              top: [
                "120%",
                "118%",
                "115%",
                "112%",
                "105%",
                "98%",
                "90%",
                "80%",
                "65%",
                "50%",
                "35%",
                "20%",
                "5%",
                "-10%",
                "-20%",
              ],
              left: [
                0, 40, 80, 120, 200, 250, 300, 350, 380, 390, 395, 400, 400,
              ],
            }}
            transition={{
              duration: 2,
              ease: "linear",
            }}
            className="absolute flex"
            // className="-top-7 left-[28.5%] absolute flex -rotate-45"
          >
            <Image
              src="/home/butterfly.gif"
              alt="Illustration of butterfly"
              width={100}
              height={100}
            />
          </motion.div>
        </div>
        <p className="mt-[0.88rem] max-w-2xl font-[500] text-text-400 typography-paragraph-large">
          Nepal’s top IVF centers, offering advanced infertility treatments with
          15+ years of expertise to support your path to parenthood.
        </p>
        <div className="flex items-center gap-6 mt-[2.44rem] h-full">
          <button
            onClick={handleAppointmentClick}
            style={{
              background: "linear-gradient(90deg, #A0385A 0%, #3A142C 100%)",
            }}
            className="shadow-box px-[2.75rem] py-[0.94rem] border-2 border-secondary-100 rounded-full w-max font-bold text-white cursor-pointer typography-h5"
          >
            Book an Appointment
          </button>
          <button className="flex justify-center items-center p-[0.69rem] border border-secondary-800 rounded-full cursor-pointer shrink-0 grow-0">
            <Image
              src={"/svg/play-icon.svg"}
              height={24}
              width={24}
              alt="Play icon"
              className="size-[1.11rem] text-secondary-900"
            />
          </button>
        </div>
      </div>
      <div className="-bottom-36 z-10 absolute inset-x-0">
        <Image
          className="absolute"
          src="/home/hero-bottom-lines.png"
          alt="Illustration of circle"
          layout="responsive"
          width={1000}
          height={1000}
        />
        <Image
          src="/home/hero-bottom-background.png"
          alt="Illustration of circle"
          layout="responsive"
          width={1000}
          height={1000}
        />
        {/* <Image
          src="/vatsalya-butterfly.svg"
          alt="Illustration of circle"
          width={100}
          height={100}
          className="-bottom-20 left-1/2 absolute -translate-x-1/2 transform"
        /> */}
      </div>
      <div className="right-0 left-1/2 absolute inset-y-0">
        <HeroAnimationCarousel
          images={[
            "/home/hero-img-1.png",
            "/home/hero-img-2.png",
            "/home/hero-img-1.png",
            "/home/hero-img-2.png",
          ]}
        />
      </div>
      <CalendarModal
        modalOpen={openModal}
        setModalOpen={setOpenModal}
        onCloseModal={() => setOpenModal(false)}
      />
    </div>
  );
};
export default HeroSection;
