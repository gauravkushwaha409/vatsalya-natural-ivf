"use client";
import NavBotton from "@/components/bottons/NavBotton";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";
type props = {
  navlinks: { name: string; link: string }[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
const MobileNavModal: React.FC<props> = ({ navlinks, isOpen, setIsOpen }) => {
  if (typeof document !== "undefined")
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
            className="  top-0 z-[100] fixed flex justify-center w-screen  overflow-hidden text-black"
          >
            <div className="absolute top-4 right-10">
              <NavBotton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex flex-col mt-26 gap-5 ">
              {navlinks.map((item, index) => (
                <ul className="px-8 w-max text-left" key={index}>
                  <Link
                    className="w-max font-bold text-secondary-500 typography-h4 "
                    href={item.link}
                    onClick={() => {
                      setIsOpen(false);
                    }}
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
