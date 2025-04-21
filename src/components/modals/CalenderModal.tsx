"use client";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ApiResponse, handleErrors } from "@/helper/error-helper";
import useClickOutside from "@/hooks/useClickOutside";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ISlot, ISlotResponse } from "@/interface/slot";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { add, format } from "date-fns";
import { FormikProps } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import RenderCells from "../RenderCells";
import ConfirmationModal from "./ConfirmationModal";
import { IFormValues } from "./RequestAppoimentModal";

interface CalendarProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: IFormValues;
  formik?: FormikProps<IFormValues>;
}

const CalendarModal: React.FC<CalendarProps> = ({
  modalOpen,
  onCloseModal,
  setModalOpen,
  data,
  formik,
}) => {
  const [postAppointment] = usePostDataMutation();
  const [availableSlots, setAvailableSlots] = useState<ISlotResponse | null>(
    null
  );
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showTime, setShwowTime] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef1 = useClickOutside(onCloseModal);
  const isSmall = useMediaQuery("(width <= 40rem)");

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

  const handleSelectTime = async (slotId: string) => {
    if (!selectedDate || !data) return;

    const payload = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      center: data.center,
      expert: data.doctor,
      message: data.message,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: slotId,
    };

    try {
      const response = (await postAppointment({
        url: endpoints.appointment,
        data: payload,
      })) as ApiResponse;

      if (response?.error) {
        if (formik) {
          handleErrors(response, formik.setErrors);
        }
        showErrorMessage("Failed to book appointment");
        return;
      }

      if (response?.data?.status === "success") {
        showSuccessMessage(response.data.message);
        formik?.resetForm();

        setModalOpen(false);
        setOpenModal(true);
      }
    } catch (error) {
      console.error("Appointment booking failed:", error);
      showErrorMessage("Something went wrong");
    }
  };

  const fetchAvailableSlots = async (date: Date) => {
    if (!data?.center || !data?.doctor) return;

    const payload = {
      date: format(date, "yyyy-MM-dd"),
      center: data.center,
      expert: data.doctor,
    };

    try {
      const response = await postAppointment({
        url: `${endpoints.available_dates}`,
        data: payload,
      });
      if (response?.error) {
        setAvailableSlots(null);
        showErrorMessage(
          (response?.error &&
            "data" in response.error &&
            (response.error.data as { message?: string })?.message) ||
            "No slots available"
        );
        return;
      }

      if (response?.data?.status === "success") {
        setAvailableSlots(response?.data);
        showSuccessMessage(response?.data?.message);
        formik?.resetForm();
      }
    } catch (error) {
      console.error("Failed to fetch slots:", error);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShwowTime(true);
    fetchAvailableSlots(date);
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
              className="relative bg-white p-5 md:p-10 lg:px-10 rounded-lg w-11/12 lg:w-7/12"
              ref={modalRef1}
            >
              <h1 className="font-medium text-start typography-h3">
                Select Date & Time
              </h1>
              <button
                onClick={() => setModalOpen(false)}
                className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer"
              >
                x
              </button>

              <div className="flex lg:flex-row flex-col justify-center gap-10 mt-5">
                <motion.div className="w-[100%] lg:w-[50%] aspect-square">
                  <div>{renderHeader()}</div>
                  <div>{renderDays()}</div>
                  <div>
                    <RenderCells
                      currentDate={currentDate}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                      setShwowTime={setShwowTime}
                      onDateSelect={handleDateSelect}
                    />
                  </div>
                </motion.div>

                {showTime && (
                  <motion.div
                    initial={{ width: isSmall ? "100%" : "0", opacity: 0 }}
                    animate={{ width: isSmall ? "100%" : "40%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-row lg:flex-col justify-center items-center gap-5 bg-white mt-0 lg:mt-10"
                  >
                    {availableSlots?.data?.length || 0 > 0 ? (
                      <>
                        {availableSlots?.data?.map((slot: ISlot) => (
                          <button
                            key={slot.id}
                            onClick={() => handleSelectTime(slot.id)}
                            className="bg-white hover:bg-secondary-500 px-4 py-2 border border-secondary-300 rounded-full w-full text-secondary-500 hover:text-white transition-colors duration-700 hover:duration-200 ease-in-out"
                          >
                            {slot.startTime} - {slot.endTime}
                          </button>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col justify-center items-center gap-2 bg-secondary-50 shadow-sm p-6 border border-secondary-200 rounded-xl text-secondary-500 text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-secondary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <p className="font-semibold text-lg">
                            No slots available
                          </p>
                          <p className="text-secondary-400 text-sm">
                            Please try again later or choose another day.
                          </p>
                        </div>
                      </>
                    )}
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
