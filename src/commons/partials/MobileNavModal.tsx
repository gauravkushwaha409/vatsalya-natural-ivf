"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
type props = {
  navlinks: { name: string; link: string }[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
const MobileNavModal: React.FC<props> = ({ navlinks, setIsOpen, isOpen }) => {
  if (typeof window !== "undefined")
    return createPortal(
      <>
        {isOpen && (
          <motion.div
            initial={{ height: 20 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
            style={{
              background: "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
            }}
            className="fixed  top-0 flex justify-center items-center z-40 overflow-hidden text-black  h-screen w-screen"
          >
            <div className="flex flex-col gap-5">
              {navlinks.map((item, index) => (
                <ul className="px-8 w-max text-left" key={index}>
                  <Link
                    className="w-max font-bold text-secondary-500 typography-paragraph-large"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </ul>
              ))}{" "}
            </div>
          </motion.div>
        )}
      </>,
      document.body
    );
};

export default MobileNavModal;
