"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { PhoneCall } from "lucide-react";
import React, { useState } from "react";

const FooterMenu = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex items-center fixed bottom-0 left-0 right-0 justify-between z-50 md:hidden">
      <button
        onClick={() => handleAppointmentClick()}
        className="bg-secondary-500 w-full text-center text-white font-semibold  typography-paragraph-regular leading-[120%] p-8 "
      >
        Book Appointment
      </button>
      <button
        onClick={() => (window.location.href = "tel:+977-1-5970611")}
        className="flex items-center gap-3 bg-primary-500 p-6 w-full justify-center font-semibold text-white  typography-paragraph-regular"
      >
        <div className="bg-white rounded-full flex items-center justify-center text-primary-500 w-[30px] h-[30px]">
          <PhoneCall size={14} />
        </div>
        Call Us
      </button>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default FooterMenu;
