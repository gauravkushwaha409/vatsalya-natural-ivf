"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavModal from "./MobileNavModal";
import { X } from "lucide-react";
import { TfiLayoutLineSolid } from "react-icons/tfi";

type props = {
  navlinks: { name: string; link: string }[];
};
const MobileNav: React.FC<props> = ({ navlinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hide-for-desktop">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="text-black flex flex-col gap-0"
        >
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsOpen?.(false)}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex justify-center items-center rounded-full border border-white p-2 cursor-pointer"
          >
            <X size={24} className="text-black font-bold" />
          </button>
          <MobileNavModal
            navlinks={navlinks}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </>
      )}
    </div>
  );
};

export default MobileNav;
