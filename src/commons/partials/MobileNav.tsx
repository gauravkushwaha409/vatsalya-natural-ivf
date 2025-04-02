"use client";
import React, { useState } from "react";
import lineicon from "@/assests/icons/Lineicon.svg";
import MobileNavModal from "./MobileNavModal";
import Image from "next/image";
import { motion } from "framer-motion";

type props = {
  navlinks: { name: string; link: string }[];
};
const MobileNav: React.FC<props> = ({ navlinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hide-for-desktop">
      <>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col items-center justify-center gap-2 p-2 hover:cursor-pointer"
        >
          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 12 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8"
          >
            <Image src={lineicon} alt="lineicon" className="w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-8"
          >
            <Image src={lineicon} alt="lineicon" className="w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? -12 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8"
          >
            <Image src={lineicon} alt="lineicon" className="w-full h-full" />
          </motion.div>
        </button>
        <MobileNavModal
          navlinks={navlinks}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </>
    </div>
  );
};

export default MobileNav;
