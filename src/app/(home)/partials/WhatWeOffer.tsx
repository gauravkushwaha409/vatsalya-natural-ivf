"use client";

import { useIsSmall } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import { useState } from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import {
  OfferCard,
  WhatWeOfferProps,
} from "../interface/whatWeOffer.interface";

// Section Title component

// Main component
const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ data }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const isMobile = useIsSmall();
  const OFFER_CARDS: OfferCard[] = [
    {
      id: data[0]?.id,
      title: data[0]?.name,
      description: data[0]?.description,
      imageSrc: data[0]?.icon,
      slug: data[0]?.slug,
      position: "left-top",
      bgColor: "bg-secondary-50",
      textColor: "text-secondary-500",
      shape: "rounded-full rounded-br-none",
      marginTop: "2.5rem",
    },
    {
      id: data[1]?.id,
      title: data[1]?.name,
      description: data[1]?.description,
      imageSrc: data[1]?.icon,
      slug: data[1]?.slug,
      position: "left-bottom",
      bgColor: "bg-primary-50",
      textColor: "text-primary-500",
      shape: "rounded-[5.625rem] rounded-tr-none rounded-bl-none",
    },
    {
      id: data[2]?.id,
      title: data[2]?.name,
      description: data[2]?.description,
      imageSrc: data[2]?.icon,
      slug: data[2]?.slug,
      position: "center",
      bgColor: "",
      textColor: "",
      shape: "rounded-full",
      gradient: true,
    },
    {
      id: data[3]?.id,
      title: data[3]?.name,
      description: data[3]?.description,
      imageSrc: data[3]?.icon,
      slug: data[3]?.slug,
      position: "right-top",
      bgColor: "bg-primary-50",
      textColor: "text-primary-500",
      shape: "rounded-full rounded-bl-none",
      marginTop: "2.5rem",
    },
    {
      id: data[4]?.id,
      title: data[4]?.name,
      description: data[4]?.description,
      imageSrc: data[4]?.icon,
      slug: data[4]?.slug,
      position: "right-bottom",
      bgColor: "bg-secondary-50",
      textColor: "text-secondary-500",
      shape: "rounded-[5.625rem] rounded-tl-none rounded-br-none",
    },
  ];
  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.4 }}
      className="px-4 md:px-6 lg:px-0"
    >
      <div className="flex justify-center items-center gap-3 sm:gap-5 py-6 sm:py-10">
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        <h2 className="w-max font-bold text-primary-500 text-sm sm:text-base uppercase tracking-[0.12rem] sm:tracking-[0.18rem]">
          What we Offer
        </h2>
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
      </div>
      <h1 className="px-4 pb-6 sm:pb-[3.75rem] font-bold text-center typography-h3 sm:typography-h2">
        Comprehensive Fertility Care, Tailored for You
      </h1>
      {isMobile ? (
        <MobileLayout OFFER_CARDS={OFFER_CARDS} />
      ) : (
        <DesktopLayout isInView={isInView} OFFER_CARDS={OFFER_CARDS} />
      )}
    </motion.div>
  );
};

export default WhatWeOffer;
