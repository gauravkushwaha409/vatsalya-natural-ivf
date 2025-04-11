import React from "react";
import { motion } from "motion/react";
import { LayoutProps } from "../interface/whatWeOffer.interface";
import OfferCard from "./OfferCard";

const DesktopLayout: React.FC<LayoutProps> = ({ isInView, OFFER_CARDS }) => {
  const DURATION = 0.9;
  const DELAY = 0.4;
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

export default DesktopLayout;
