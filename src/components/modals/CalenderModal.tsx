"use client";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import RenderCells from "@/components/RenderCells";
import { ApiResponse, handleErrors } from "@/helper/error-helper";
import useClickOutside from "@/hooks/useClickOutside";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { add, format } from "date-fns";
import { FormikProps } from "formik";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import AppointmentConfirmationModal from "./ConfirmAppointmentModal";
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

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
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

  const handleConfirmation = async () => {
    if (!data || !selectedDate) return;

    const payload = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      center: data.center,
      expert: data.doctor,
      message: data.message,
      date: format(selectedDate, "yyyy-MM-dd"),
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
  const handleDateSelect = async (date: Date) => {
    setSelectedDate(date);
    setShowConfirmationModal(true)
    // fetchAvailableSlots(date);
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
              className="relative bg-white p-5 md:p-10 lg:px-10 rounded-lg"
              ref={modalRef1}
            >
              <h1 className="font-medium text-start typography-h3">
                Select Date & Time
              </h1>
              <button
                onClick={() => setModalOpen(false)}
                className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer"
              >
                <X />
              </button>

              <div className="flex lg:flex-row flex-col justify-center gap-10 mt-5">
                <motion.div className="w-full aspect-square">
                  <div>{renderHeader()}</div>
                  <div>{renderDays()}</div>
                  <div>
                    <RenderCells
                      currentDate={currentDate}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                      // setShwowTime={setShwowTime}
                      onDateSelect={handleDateSelect}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        <AppointmentConfirmationModal
          isOpen={showConfirmationModal}
          onClose={() => setShowConfirmationModal(false)}
          onConfirm={handleConfirmation}
          appointmentDate={
            selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""
          }
        />
        <ConfirmationModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </>,
      document.body
    );
};

export default CalendarModal;
