"use client";
import NavBotton from "@/components/bottons/NavBotton";
import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";

type props = {
  navlinks: {
    name: string;
    link: string;
    children?: { name: string; link: string }[];
  }[];

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isOpen: boolean;
};
const MobileNavModal: React.FC<props> = ({ navlinks, isOpen, setIsOpen }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
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
              {navlinks.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = openIndex === index;
                return (
                  <ul className="w-full min-w-50 text-left" key={index}>
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() => {
                        if (hasChildren) {
                          setOpenIndex(isExpanded ? null : index);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      <Link
                        className="w-max font-bold text-secondary-500 typography-h4 "
                        href={item.link}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>

                      {hasChildren && (
                        <ChevronDown
                          size={20}
                          className={`text-secondary-500 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* --- CHILDREN (dropdown with animation) --- */}
                    {item.children && isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 ml-4 flex flex-col gap-2 overflow-hidden"
                      >
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.link}
                            className="font-medium text-secondary-500 text-[18px]"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </ul>
                );
              })}
            </div>

            <div>
              <button
                onClick={() => (window.location.href = "tel:+977-9701021111")}
                style={{
                  boxShadow:
                    "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
                }}
                className="absolute  left-20  bottom-14 flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer typography-paragraph-regular"
              >
                <Phone size={20} /> Call Us
              </button>
            </div>
          </motion.div>
        )}
      </>,
      document.body
    );
};

export default MobileNavModal;
