"use client";

import { motion } from "motion/react";
import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

const HeroSection = () => {
  const text = "Journey to <parenthood,> /b Naturally and Compassionately";
  return (
    <div className="flex justify-center items-center pl-20 h-full min-h-screen">
      <div className="flex flex-col justify-center w-full h-full text-left">
        <h2 className="font-bold text-primary-500 uppercase tracking-wide typography-paragraph-large">
          Natural IVF
        </h2>
        <div className="relative pt-5">
          <HeroTextAnimation text={text} />
          <motion.div
            animate={{
              rotate: [90, 88, 92, 90, 55, 49, 46, 45, 40, 20, 0, -45],
              top: [
                "120%",
                "110%",
                "130%",
                "120%",
                "80%",
                "70%",
                "60%",
                "40%",
                "10%",
                "-20%",
              ],
              left: [
                "0%",
                "5%",
                "10%",
                "15%",
                "20%",
                "25%",
                "28.5%",
                "35%",
                "40%",
                "28.5%",
              ],
            }}
            transition={{
              duration: 10,
              // repeat: Infinity,
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
      </div>
    </div>
  );
};
export default HeroSection