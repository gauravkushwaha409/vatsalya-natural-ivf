"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import MobileNavModal from "./MobileNavModal";

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
          className="flex flex-col gap-0 text-black"
        >
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsOpen?.(false)}
            className="top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-black" />
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
