"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { add, format } from "date-fns";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import RenderCells from "./components/RenderCells";
import ConfirmationModal from "./ConfirmationModal";

interface CalendarProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectDoctor?: string;
}

const CalendarModal: React.FC<CalendarProps> = ({
  modalOpen,
  onCloseModal,
  setModalOpen,
  selectDoctor,
}) => {
  const dummyAvailableDates = [
    "2025-03-01",
    "2025-03-02",
    "2025-03-03",
    "2025-03-04",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showTime, setShwowTime] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef1 = useClickOutside(onCloseModal);

  const renderHeader = () => {
    const monthYear = format(currentDate, "MMMM yyyy");

    return (
      <div className="flex justify-between items-center p-4 header">
        <button
          className="text-[#9B51E0] text-sm"
          onClick={() => setCurrentDate(add(currentDate, { months: -1 }))}
        >
          ❮
        </button>
        <h2 className="font-medium text-primary text-base">{monthYear}</h2>
        <button
          className="text-[#9B51E0] text-sm"
          onClick={() => setCurrentDate(add(currentDate, { months: 1 }))}
        >
          ❯
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-[12px] text-gray-500 text-center uppercase">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 font-bold">
            {day}
          </div>
        ))}
      </div>
    );
  };
  const handleSelectTime = () => {
    console.log(selectDoctor);
    setModalOpen(false);
    setOpenModal(true);
  };
  if (typeof document !== "undefined")
    return createPortal(
      <>
        {modalOpen && (
          <div className="z-[100] fixed inset-0 flex justify-center items-center bg-black/40 h-screen text-black">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-5 md:p-10 lg:px-10 rounded-lg w-7/12"
              ref={modalRef1}
            >
              <h1 className="font-medium text-start typography-h4">
                Select Date & Time
              </h1>
              <button
                onClick={() => setModalOpen(false)}
                className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer *:"
              >
                x
              </button>
              <div className="flex justify-center gap-10 mt-5">
                <motion.div className="w-[50%] aspect-square">
                  <div>{renderHeader()}</div>
                  <div>{renderDays()}</div>
                  <div>
                    <RenderCells
                      currentDate={currentDate}
                      selectedDate={selectedDate}
                      dummyAvailableDates={dummyAvailableDates}
                      setSelectedDate={setSelectedDate}
                      setShwowTime={setShwowTime}
                    />
                  </div>
                </motion.div>
                {showTime && (
                  <motion.div
                    initial={{ width: "0", opacity: 0 }}
                    animate={{ width: "40%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="space-y-3 bg-white mt-10"
                  >
                    {Array.from({ length: 3 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectTime()}
                        className="inline-block bg-white hover:bg-secondary-500 px-4 py-2 border border-secondary-300 rounded-full w-full text-secondary-500 hover:text-white transition-colors duration-700 hover:duration-200 ease-in-out"
                      >
                        9:10
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
        <ConfirmationModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </>,
      document.body
    );
};

export default CalendarModal;
