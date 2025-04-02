"use client";
import RequestAppoimentModal from "@/app/(home)/modals/RequestAppoimentModal";
import React, { useState } from "react";

const Schedule = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen?.(true)}
        style={{
          boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
        }}
        className="bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white typography-paragraph-regular cursor-pointer  hide-for-mobile"
      >
        Schedule a Consultation
      </button>
      <RequestAppoimentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen?.(false)}
      />
    </div>
  );
};

export default Schedule;
