"use client";
import React, { useState } from "react";
import { format, add } from "date-fns";
import useClickOutside from "@/hooks/useClickOutside";
import RequestAppoimentModal from "./RequestAppoimentModal";
import { motion } from "framer-motion";
import RenderCells from "./components/RenderCells";
import { createPortal } from "react-dom";

interface CalendarProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectService?: string;
}

const CalendarModal: React.FC<CalendarProps> = ({
  modalOpen,
  onCloseModal,
  setModalOpen,
  selectService,
}) => {
  const dummyAvailableDates = [
    "2025-03-01",
    "2025-03-02",
    "2025-03-03",
    "2025-03-04",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [requestAppoimentModal, setRequestAppoimentModal] = useState(false);
  const [showTime, setShwowTime] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const modalRef1 = useClickOutside(onCloseModal);

  const renderHeader = () => {
    const monthYear = format(currentDate, "MMMM yyyy");

    return (
      <div className="header flex justify-between items-center p-4">
        <button
          className="text-[#9B51E0] text-sm"
          onClick={() => setCurrentDate(add(currentDate, { months: -1 }))}
        >
          ❮
        </button>
        <h2 className="text-base font-medium text-primary ">{monthYear}</h2>
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
      <div className="  grid grid-cols-7 text-center text-gray-500 text-[12px] uppercase  ">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 font-bold">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const handleReqModal = () => {
    setRequestAppoimentModal(!requestAppoimentModal);
    setModalOpen(false);
  };

  return createPortal(
    <>
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[100]   text-black  h-screen">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-5 md:p-10 lg:px-10 rounded-lg  relative  w-7/12"
            ref={modalRef1}
          >
            <h1 className="typography-h4 font-medium text-start">
              Select Date & Time
            </h1>
            <button
              onClick={() => onCloseModal()}
              className="text-2xl text-text-400 absolute top-5 right-10 cursor-pointer *:"
            >
              x
            </button>
            <div className="flex gap-10 justify-center mt-5 ">
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
                  className="bg-white mt-10   space-y-3"
                >
                  {Array.from({ length: 3 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleReqModal()}
                      className="text-secondary-500 border border-secondary-300 rounded-full px-4 py-2 w-full inline-block bg-white hover:bg-secondary-500 hover:text-white transition-colors duration-700 hover:duration-200 ease-in-out"
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
      <RequestAppoimentModal
        selectService={selectService}
        selectedDate={selectedDate || new Date() || ""}
        isOpen={requestAppoimentModal}
        onClose={() => setRequestAppoimentModal(false)}
        setIsOpen={setRequestAppoimentModal}
      />
    </>,
    document.body
  );
};

export default CalendarModal;
