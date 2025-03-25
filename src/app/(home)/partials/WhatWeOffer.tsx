"use client";
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from 'react';

const DURATION = 0.9,
DELAY = 0.4;

const WhatWeOffer = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount:0.4 }}
    >
      <div className="flex justify-center items-center gap-5 py-10">
        <span className="bg-primary-500 w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 uppercase tracking-[0.18rem]">
          What we Offer
        </h2>
        <span className="bg-primary-500 w-[8.5rem] h-px" />
      </div>
      <h1 className="pb-[3.75rem] font-bold text-center typography-h3">
        Comprehensive Fertility Care, Tailored for You
      </h1>
      <div className="flex gap-x-[1.62rem] mx-auto px-10 w-max">
        {/* Left side card */}
        <motion.div
          initial={{
            x: "50%",
          }}
          animate={{
            x: isInView ? "0%":"50%",
            transition:{
              default:{
                duration: DURATION,
                delay: isInView?DELAY:0
              }
            }
          }}
          className="gap-5 grid grid-rows-2"
        >
          {/* left top card */}
          <div className="flex flex-col items-end gap-[0.63rem] bg-secondary-50 px-10 pt-14 rounded-full rounded-br-none h-[21rem] aspect-square text-right">
            <div className="w-max">
              <Image
                src="/home/svg/infertality.svg"
                width={100}
                height={100}
                alt="What we offer 1"
              />
            </div>
            <h1 className="font-bold text-secondary-500 typography-h5">
              Infertility Treatment
            </h1>
            <p className="font-medium text-text-400 line-clamp-4 typography-paragraph-regular">
              Experience personalized infertility treatments designed to help
              you achieve your dream of starting a family.
            </p>
            <button className="font-semibold typography-paragraph-regular">
              Learn more
            </button>
          </div>
          {/* left bottom card */}
          <div className="flex flex-col items-end gap-[0.63rem] bg-primary-50 px-10 pt-9 rounded-full rounded-tr-none h-[21rem] aspect-square text-right">
            <div className="w-max">
              <Image
                src="/home/svg/donor-treatment.svg"
                width={100}
                height={100}
                alt="What we offer 2"
              />
            </div>
            <h1 className="font-bold text-primary-500 typography-h5">
              Donor Treatment
            </h1>
            <p className="font-medium text-text-400 line-clamp-3 typography-paragraph-regular">
              Experience personalized infertility treatments designed to help
              you achieve your dream of starting a family.
            </p>
            <button className="pr-1.5 font-semibold typography-paragraph-regular">
              Learn more
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            transition:{
              default:{
                duration: DURATION+DELAY,
                delay: isInView?DELAY:0
              }
            }
          }}
          className="flex justify-center items-center"
        >
          {/* Center Circle card */}
          <div
            style={{
              background: "linear-gradient(180deg, #FDEDEB 0%, #F3E7ED 100%)",
            }}
            className="flex flex-col justify-center items-center gap-[0.62rem] p-[2.37rem] rounded-full w-full h-[19.75rem] aspect-square text-center"
          >
            <div className="w-max">
              <Image
                src="/home/svg/infertilaty-diagnosis.svg"
                width={100}
                height={100}
                alt="What we offer 2"
              />
            </div>
            <h1
              style={{
                background: "linear-gradient(180deg, #FF6F61 0%, #A03879 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="font-bold typography-h5"
            >
              Infertility Diagnosis
            </h1>
            <p className="font-medium text-text-400 line-clamp-3 typography-paragraph-regular">
              Experience personalized infertility treatments designed to help
              you achieve your dream of starting a family.
            </p>
            <button className="pr-1.5 font-semibold typography-paragraph-regular">
              Learn more
            </button>
          </div>
        </motion.div>

        {/* Right side cards */}
        <motion.div
          initial={{
            x: "-50%",
          }}
          animate={{
            x: isInView ? 0 : "-50%",
            transition:{
              default:{
                duration: DURATION,
                delay: isInView?DELAY:0
              }
            }
          }}
          className="gap-5 grid grid-rows-2"
        >
          {/* Right top card */}
          <div className="flex flex-col items-start gap-[0.63rem] bg-primary-50 px-10 pt-14 rounded-full rounded-bl-none h-[21rem] aspect-square text-left">
            <div className="w-max">
              <Image
                src="/home/svg/fertility-preservation.svg"
                width={100}
                height={100}
                alt="What we offer 2"
              />
            </div>
            <h1 className="font-bold text-primary-500 typography-h5">
              Fertility Preservation
            </h1>
            <p className="font-medium text-text-400 line-clamp-3 typography-paragraph-regular">
              Experience personalized infertility treatments designed to help
              you achieve your dream of starting a family.
            </p>
            <button className="pr-1.5 font-semibold typography-paragraph-regular">
              Learn more
            </button>
          </div>
          {/* Right bottom card */}
          <div className="flex flex-col items-start gap-[0.63rem] bg-secondary-50 px-10 pt-9 rounded-full rounded-tl-none h-[21rem] aspect-square text-left">
            <div className="w-max">
              <Image
                src="/home/svg/antenatal.svg"
                width={100}
                height={100}
                alt="What we offer 2"
              />
            </div>
            <h1 className="font-bold text-secondary-500 typography-h5">
              Antenatal Checkup
            </h1>
            <p className="font-medium text-text-400 line-clamp-3 typography-paragraph-regular">
              Experience personalized infertility treatments designed to help
              you achieve your dream of starting a family.
            </p>
            <button className="pl-1.5 font-semibold typography-paragraph-regular">
              Learn more
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default WhatWeOffer