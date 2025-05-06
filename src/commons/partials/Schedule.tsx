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
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0"
        onClick={() => onSelect("ivf")}
        style={{ cursor: "default" }}
      ></div>
      <div
        className="absolute z-[100] bg-white rounded-lg shadow-lg border border-gray-200"
        style={{
          top: window.dropdownPosition?.top || "0px",
          left: window.dropdownPosition?.left || "0px",
          width: "224px",
        }}
      >
        <ul className="py-1 text-sm text-gray-700">
          <li>
            <Link
              href={PATHS.ivfDueCalculatotr}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 inline-block"
            >
              IVF Calculator
            </Link>
          </li>
          <li>
            <Link
              href={PATHS.ovulationCalculator}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 inline-block"
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

const Schedule = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
    window.dropdownPosition = { top: "0px", left: "0px" };
  }, []);

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
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        style={{
          boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
        }}
        className="bg-secondary-500 flex gap-3 items-center px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white typography-paragraph-regular cursor-pointer hide-for-mobile"
      >
        <PiCalculatorBold />
        Calculator
        <MdOutlineArrowDropDown size={20} />
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

export default Schedule;
