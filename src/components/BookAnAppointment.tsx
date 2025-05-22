"use client";
import React, { useState } from "react";
import RequestAppoimentModal from "./modals/RequestAppoimentModal";

interface Props {
  styles?: string;
  center?: string;
}
const BookAnAppointment: React.FC<Props> = ({ styles, center }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen?.(true)}
        className={`px-4 py-2 cursor-pointer  rounded-full font-semibold text-secondary-500  typography-paragraph-regular border border-secondary-500 ${styles}`}
      >
        Book an Appointment
      </button>
      <RequestAppoimentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        selectedCenter={center}
      />
    </>
  );
};

export default BookAnAppointment;
