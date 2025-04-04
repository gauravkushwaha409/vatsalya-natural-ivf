"use client";
import { useIsSmall } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

// Animation constants
const DURATION = 0.9;
const DELAY = 0.4;

// Type definitions
type CardPosition =
  | "left-top"
  | "left-bottom"
  | "center"
  | "right-top"
  | "right-bottom";
type CardAlignment = "start" | "center" | "end";

interface OfferCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  position: CardPosition;
  bgColor: string;
  textColor: string;
  shape: string;
  gradient?: boolean;
}

interface OfferCardProps {
  card: OfferCard;
  isMobile: boolean;
  align?: CardAlignment;
}

// Card data
const OFFER_CARDS: OfferCard[] = [
  {
    id: "infertility-treatment",
    title: "Infertility Treatment",
    description:
      "Experience personalized infertility treatments designed to help you achieve your dream of starting a family.",
    imageSrc: "/home/svg/infertality.svg",
    position: "left-top",
    bgColor: "bg-secondary-50",
    textColor: "text-secondary-500",
    shape: "rounded-full rounded-br-none",
  },
  {
    id: "donor-treatment",
    title: "Donor Treatment",
    description:
      "Experience personalized infertility treatments designed to help you achieve your dream of starting a family.",
    imageSrc: "/home/svg/donor-treatment.svg",
    position: "left-bottom",
    bgColor: "bg-primary-50",
    textColor: "text-primary-500",
    shape: "rounded-[5.625rem] rounded-tr-none rounded-bl-none",
  },
  {
    id: "infertility-diagnosis",
    title: "Infertility Diagnosis",
    description:
      "Experience personalized infertility treatments designed to help you achieve your dream of starting a family.",
    imageSrc: "/home/svg/infertilaty-diagnosis.svg",
    position: "center",
    bgColor: "",
    textColor: "",
    shape: "rounded-full",
    gradient: true,
  },
  {
    id: "fertility-preservation",
    title: "Fertility Preservation",
    description:
      "Experience personalized infertility treatments designed to help you achieve your dream of starting a family.",
    imageSrc: "/home/svg/fertility-preservation.svg",
    position: "right-top",
    bgColor: "bg-primary-50",
    textColor: "text-primary-500",
    shape: "rounded-full rounded-bl-none",
  },
  {
    id: "antenatal-checkup",
    title: "Antenatal Checkup",
    description:
      "Experience personalized infertility treatments designed to help you achieve your dream of starting a family.",
    imageSrc: "/home/svg/antenatal.svg",
    position: "right-bottom",
    bgColor: "bg-secondary-50",
    textColor: "text-secondary-500",
    shape: "rounded-[5.625rem] rounded-tl-none rounded-br-none",
  },
];

// Individual card component
const OfferCard: React.FC<OfferCardProps> = ({
  card,
  isMobile,
  align = "center",
}) => {
  const { title, description, imageSrc, bgColor, textColor, shape, gradient } =
    card;

  // Dynamic styles based on alignment and mobile state
  const getContainerClassName = (): string => {
    let className = `flex flex-col gap-[0.63rem] ${bgColor} ${shape}`;

    if (isMobile) {
      className += " items-center text-center px-6 py-8 h-auto w-full";
    } else {
      if (align === "center") {
        className +=
          " items-center text-center p-[2.37rem] h-[19.75rem] aspect-square";
      } else if (align === "end") {
        className += ` items-end text-right px-10 pt-${
          card.position === "left-top" ? "14" : "9"
        } h-[21rem] aspect-square`;
      } else {
        className += ` items-start text-left px-10 pt-${
          card.position === "right-top" ? "14" : "9"
        } h-[21rem] aspect-square`;
      }
    }

    return className;
  };

  // Button padding based on alignment
  const getButtonClassName = (): string => {
    let className = "font-semibold";

    if (!isMobile) {
      if (align === "start") className += " pl-1.5";
      if (align === "end") className += " pr-1.5";
    }

    className += isMobile
      ? " typography-paragraph-small"
      : " typography-paragraph-regular";
    return className;
  };

  // Text & gradient styles
  const gradientStyle = gradient
    ? {
        background: "linear-gradient(180deg, #FDEDEB 0%, #F3E7ED 100%)",
      }
    : {};

  const titleStyle = gradient
    ? {
        background: "linear-gradient(180deg, #FF6F61 0%, #A03879 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }
    : {};

  return (
    <div className={getContainerClassName()} style={gradientStyle}>
      <div className="w-max">
        <Image
          src={imageSrc}
          width={isMobile ? 80 : 100}
          height={isMobile ? 80 : 100}
          alt={title}
        />
      </div>
      <h1
        className={`font-bold ${textColor} ${
          isMobile ? "typography-h6" : "typography-h4"
        }`}
        style={titleStyle}
      >
        {title}
      </h1>
      <p
        className={`font-medium text-text-400 line-clamp-${
          card.position === "left-top" ? "4" : "3"
        } ${
          isMobile
            ? "typography-paragraph-small"
            : "typography-paragraph-regular"
        }`}
      >
        {description}
      </p>
      <button className={getButtonClassName()}>Learn more</button>
    </div>
  );
};

// Section Title component
const SectionTitle: React.FC = () => (
  <>
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
  </>
);

interface LayoutProps {
  isInView: boolean;
}

// Desktop Layout
const DesktopLayout: React.FC<LayoutProps> = ({ isInView }) => {
  const leftCards = OFFER_CARDS.filter((card) =>
    card.position.startsWith("left")
  );
  const centerCard = OFFER_CARDS.find((card) => card.position === "center");
  const rightCards = OFFER_CARDS.filter((card) =>
    card.position.startsWith("right")
  );

  if (!centerCard) return null;

  return (
    <div className="flex gap-x-[1.62rem] mx-auto px-10 w-max">
      {/* Left column */}
      <motion.div
        initial={{
          x: "50%",
        }}
        animate={{
          x: isInView ? "0%" : "50%",
          transition: {
            default: {
              duration: DURATION,
              delay: isInView ? DELAY : 0,
            },
          },
        }}
        className="gap-5 grid grid-rows-2"
      >
        {leftCards.map((card) => (
          <OfferCard key={card.id} card={card} isMobile={false} align="end" />
        ))}
      </motion.div>

      {/* Center card */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          transition: {
            default: {
              duration: DURATION + DELAY,
              delay: isInView ? DELAY : 0,
            },
          },
        }}
        className="flex justify-center items-center"
      >
        <OfferCard card={centerCard} isMobile={false} align="center" />
      </motion.div>

      {/* Right column */}
      <motion.div
        initial={{
          x: "-50%",
        }}
        animate={{
          x: isInView ? 0 : "-50%",
          transition: {
            default: {
              duration: DURATION,
              delay: isInView ? DELAY : 0,
            },
          },
        }}
        className="gap-5 grid grid-rows-2"
      >
        {rightCards.map((card) => (
          <OfferCard key={card.id} card={card} isMobile={false} align="start" />
        ))}
      </motion.div>
    </div>
  );
};

// Mobile Layout
const MobileLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {OFFER_CARDS.map((card) => (
        <motion.div
          key={card.id}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="w-full"
        >
          <OfferCard card={card} isMobile={true} />
        </motion.div>
      ))}
    </div>
  );
};

// Main component
const WhatWeOffer: React.FC = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const isMobile = useIsSmall();

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.4 }}
      className="px-4 md:px-6 lg:px-0"
    >
      <SectionTitle />
      {isMobile ? <MobileLayout /> : <DesktopLayout isInView={isInView} />}
    </motion.div>
  );
};

export default WhatWeOffer;
