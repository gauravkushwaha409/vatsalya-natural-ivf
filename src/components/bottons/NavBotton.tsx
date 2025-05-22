"use client";
import lineicon from "@/assests/icons/Lineicon.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
interface props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBotton: React.FC<props> = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center gap-1.5 p-2 hover:cursor-pointer"
      >
        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 11 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6"
        >
          <Image
            src={lineicon}
            priority
            width={50}
            height={50}
            alt="lineicon"
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-6"
        >
          <Image
            src={lineicon}
            priority
            width={50}
            height={50}
            alt="lineicon"
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? -5 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6"
        >
          <Image
            src={lineicon}
            priority
            width={50}
            height={50}
            alt="lineicon"
            className="w-full h-full"
          />
        </motion.div>
      </button>
    </div>
  );
};

export default NavBotton;
