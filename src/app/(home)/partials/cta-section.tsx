"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CTA = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="py-9 lg:py-[72px] bg-[#ffd2ce] ">
      <div className="max-w-[1440px] px-4 lg:px-0 mx-auto flex flex-col  gap-8 lg:gap-20 lg:flex-row lg:items-center justify-between ">
        <div className="w-full lg:w-[100%] ">
          <p className="text-gray-800 text-2xl lg:text-[36px] font-semibold mt-2 ">
            Connect With Us
          </p>
          <p className="my-2">
            Reach out today to share ideas, questions, or opportunities
            together.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
          <Link href="/contact-us">
            <button
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="w-full lg:w-auto flex items-center justify-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </Link>

          <button
            onClick={handleAppointmentClick}
            style={{
              background: "linear-gradient(90deg, #A0385A 0%, #3A142C 100%)",
              boxShadow: "0px 8px 18px 0px rgba(211, 163, 193, 0.77)",
            }}
            className="w-full lg:w-auto px-8 py-4 border-2 border-secondary-100 rounded-full font-manrope font-extrabold text-white cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
          >
            Book an Appointment
          </button>
        </div>
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default CTA;
