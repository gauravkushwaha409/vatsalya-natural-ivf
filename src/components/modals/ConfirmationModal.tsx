"use client";
import React from "react";


import checkgif from "@/assests/gif/confirmed.png";
import useClickOutside from "@/hooks/useClickOutside";
import { X } from "lucide-react";
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
          className="z-[100] fixed inset-0 flex justify-center items-center bg-black/40 text-black"
        >
          <div className="relative flex flex-col items-center gap-4 bg-white shadow-lg mx-auto p-10 rounded-lg w-1/2">
            <button
              onClick={() => onClose()}
              className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer *:"
            >
              <X />
            </button>
            <Image src={checkgif} alt="checkgif" className="w-20" />
            <span className="font-bold text-secondary-600 text-center typography-h3">
              Appointment Request Sent
            </span>
            <p className="w-full font-medium text-text-400 text-center typography-paragraph-regular">
              Your appointment request has been successfully sent. A member of
              our team will contact you shortly to confirm the details
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
