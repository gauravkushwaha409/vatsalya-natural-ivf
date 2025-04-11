import React from "react";
import OfferCard from "./OfferCard";
import { motion } from "motion/react";
import { MobileLayoutProps } from "../interface/whatWeOffer.interface";

const MobileLayout: React.FC<MobileLayoutProps> = ({ OFFER_CARDS }) => {
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

export default MobileLayout;
