"use client";
import useClickOutside from "@/hooks/useClickOutside";
import React from "react";

interface AppointmentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  appointmentDate: string;
}

const AppointmentConfirmationModal: React.FC<
  AppointmentConfirmationModalProps
> = ({ isOpen, onClose, onConfirm, appointmentDate }) => {
  const modalRef = useClickOutside(onClose);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          ref={modalRef}
          className="z-[100] fixed inset-0 flex justify-center items-center bg-black/40 text-black"
        >
          <div className="relative flex flex-col items-center gap-6 bg-white shadow-lg mx-auto p-8 rounded-lg w-fit max-w-md">
            <button
              onClick={() => onClose()}
              className="top-4 right-6 absolute text-text-400 hover:text-text-600 text-2xl transition-colors cursor-pointer"
            >
              ×
            </button>

            {/* Question mark icon or warning icon */}
            <div className="flex justify-center items-center bg-orange-100 rounded-full w-16 h-16">
              <span className="font-bold text-orange-500 text-3xl">?</span>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="font-bold text-secondary-600 typography-h3">
                Are you sure?
              </h2>

              <div className="space-y-2">
                <p className="font-medium text-text-600 typography-paragraph-regular">
                  You are about to book an appointment on <br />{" "}
                  {appointmentDate}
                </p>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={onClose}
                className="flex-1 hover:bg-gray-50 px-6 py-3 border border-gray-300 rounded-lg font-medium text-text-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 bg-secondary-600 hover:bg-secondary-700 px-6 py-3 rounded-lg font-medium text-white transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentConfirmationModal;
