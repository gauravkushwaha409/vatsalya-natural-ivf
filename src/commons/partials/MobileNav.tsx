"use client";
import React, { useState } from "react";
import MobileNavModal from "./MobileNavModal";
import NavBotton from "@/components/bottons/NavBotton";

type props = {
  navlinks: { name: string; link: string }[];
};
const MobileNav: React.FC<props> = ({ navlinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hide-for-desktop">
      <>
        <NavBotton isOpen={isOpen} setIsOpen={setIsOpen} />
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
