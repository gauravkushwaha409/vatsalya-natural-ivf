"use client";
import React from "react";
import "@/app/globals.css";

import useClickOutside from "@/hooks/useClickOutside";
import checkgif from "@/assests/gif/confirmed.png";
import Image from "next/image";

interface RequestAppoimentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<RequestAppoimentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useClickOutside(onClose);

  return (
    <>
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-[100] text-black  "
        >
          <div className="bg-white flex flex-col items-center gap-4 p-10 w-fit mx-auto relative">
            <button
              onClick={() => onClose()}
              className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer *:"
            >
              x
            </button>
            <Image src={checkgif} alt="checkgif" className="w-20 " />
            <span className="typography-h4 text-secondary-600 font-bold text-center">
              Appointment Request Sent
            </span>
            <p className="text-text-400 typography-paragraph-regular font-medium w-full md:w-3/4 text-center">
              Your appointment request has been successfully sent. You will
              receive a confirmation shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
