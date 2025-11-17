"use client";

import PATHS from "@/utils/path";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiCalculatorBold } from "react-icons/pi";

const DropdownPortal = ({
  isOpen,
  onSelect,
}: {
  isOpen: boolean;
  onSelect: (type: "ivf" | "ovulation") => void;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="z-50 absolute inset-0">
      <button
        className="absolute inset-0"
        onClick={() => onSelect("ivf")}
        style={{ cursor: "default" }}
        aria-label="Close dropdown"
      />
      <div
        className="z-[100] absolute bg-white shadow-lg border border-gray-200 rounded-lg"
        style={{
          top: window.dropdownPosition?.top || "0px",
          left: window.dropdownPosition?.left || "0px",
          width: "224px",
        }}
      >
        <ul className="py-1 text-gray-700 text-sm">
          <li>
            <Link
              href={PATHS.ivfDueCalculatotr}
              className="inline-block hover:bg-gray-100 px-4 py-2 w-full text-left"
              onClick={() => onSelect("ivf")}
            >
              IVF Calculator
            </Link>
          </li>
          <li>
            <Link
              href={PATHS.ovulationCalculator}
              className="inline-block hover:bg-gray-100 px-4 py-2 w-full text-left"
              onClick={() => onSelect("ovulation")}
            >
              Ovulation Calculator
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
};

const NavCalculator = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
    window.dropdownPosition = { top: "0px", left: "0px" };

    // Add scroll event listener to close dropdown on scroll
    const handleScroll = () => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      window.dropdownPosition = {
        top: `${rect.bottom + window.scrollY + 8}px`,
        left: `${rect.right - 224 + window.scrollX}px`,
      };
    }
    setDropdownOpen((prev) => !prev);
  };

  const handleSelect = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative hide-for-mobile">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        style={{
          boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
        }}
        className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full  font-extrabold text-white cursor-pointer typography-paragraph-regular"
      >
        <PiCalculatorBold /> Calculator <MdOutlineArrowDropDown size={20} />
      </button>
      {isMounted && (
        <DropdownPortal isOpen={dropdownOpen} onSelect={handleSelect} />
      )}
    </div>
  );
};

declare global {
  interface Window {
    dropdownPosition?: {
      top: string;
      left: string;
    };
  }
}

export default NavCalculator;
