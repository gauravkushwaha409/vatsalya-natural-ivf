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
      id: data[0]?.id ?? "default-id-0",
      title: data[0]?.name ?? "Default Title 0",
      description: data[0]?.description ?? "Default description 0",
      imageSrc: data[0]?.icon ?? "/default-icon-0.png",
      slug: data[0]?.slug ?? "default-slug-0",
      position: "left-top",
      bgColor: "bg-secondary-50",
      textColor: "text-secondary-500",
      shape: "rounded-full rounded-br-none ",
      marginTop: "2.5rem",
    },
    {
      id: data[1]?.id ?? "default-id-1",
      title: data[1]?.name ?? "Default Title 1",
      description: data[1]?.description ?? "Default description 1",
      imageSrc: data[1]?.icon ?? "/default-icon-1.png",
      slug: data[1]?.slug ?? "default-slug-1",
      position: "left-bottom",
      bgColor: "bg-primary-50",
      textColor: "text-primary-500",
      shape: "rounded-[5.625rem] rounded-tr-none rounded-bl-none",
    },
    {
      id: data[2]?.id ?? "default-id-2",
      title: data[2]?.name ?? "Default Title 2",
      description: data[2]?.description ?? "Default description 2",
      imageSrc: data[2]?.icon ?? "/default-icon-2.png",
      slug: data[2]?.slug ?? "default-slug-2",
      position: "center",
      bgColor: "",
      textColor: "",
      shape: "rounded-full",
      gradient: true,
    },
    {
      id: data[3]?.id ?? "default-id-3",
      title: data[3]?.name ?? "Default Title 3",
      description: data[3]?.description ?? "Default description 3",
      imageSrc: data[3]?.icon ?? "/default-icon-3.png",
      slug: data[3]?.slug ?? "default-slug-3",
      position: "right-top",
      bgColor: "bg-primary-50",
      textColor: "text-primary-500",
      shape: "rounded-full rounded-bl-none",
      marginTop: "2.5rem",
    },
    {
      id: data[4]?.id ?? "default-id-4",
      title: data[4]?.name ?? "Default Title 4",
      description: data[4]?.description ?? "Default description 4",
      imageSrc: data[4]?.icon ?? "/default-icon-4.png",
      slug: data[4]?.slug ?? "default-slug-4",
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
      <h1 className="px-4 pb-8 md:pb-16 font-bold text-center typography-h2">
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
