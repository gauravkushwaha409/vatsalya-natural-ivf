"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import CalendarModal from "@/components/modals/CalenderModal";
import useClickOutside from "@/hooks/useClickOutside";
import { ICenter } from "@/interface/center";
import { IExperts } from "@/interface/experts";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import * as Yup from "yup";

interface RequestAppoimentModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  selectDoctor?: string | undefined;
  selectedDate?: Date | null | string;
}
export interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}

const RequestAppoimentModal: React.FC<RequestAppoimentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<IFormValues | undefined>();
  const modalRef = useClickOutside(onClose);

  const { data: centerData } = useGetDataQuery({
    url: `${endpoints.center}`,
  });

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      center: "",
      doctor: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      center: Yup.string().required("Center selection is required"),
      doctor: Yup.string().required("Doctor selection is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setData(values);
      handleRequestAppoiment();
    },
  });

  const { data: doctorData } = useGetDataQuery(
    {
      url: `${endpoints.doctor}`,
      params: {
        center: formik.values.center,
      },
    },
    {
      skip: !formik.values.center,
    }
  );

  const onCloseModal = () => {
    setModalOpen(true);
  };
  const handleRequestAppoiment = () => {
    setModalOpen(true);
    onClose();
  };
  if (typeof window !== "undefined")
    return createPortal(
      <>
        {isOpen && (
          <div className="z-[100] fixed inset-0 flex justify-center items-center bg-black/40 text-black">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white shadow-md px-10 py-7 rounded-lg w-[90%] md:w-[60%]"
              ref={modalRef}
            >
              <h1 className="mb-5 font-medium typography-h3">
                Request an Appointment
              </h1>
              <button
                onClick={() => onClose()}
                className="top-5 right-10 absolute text-text-400 text-2xl cursor-pointer *:"
              >
                x
              </button>
              <form
                onSubmit={formik.handleSubmit}
                className="gap-4 grid grid-cols-2 py-2.5 font-semibold text-text-500 typography-paragraph-regular"
              >
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-regular text-base">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="bg-transparent p-3 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="John Doe"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-regular text-base">
                    Phone No.
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    className="bg-transparent p-3 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder="+977 9803512312"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                {/* Address Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="font-regular text-base">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="bg-transparent p-3 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="baneshwor, Kathmandu"
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.address}
                    </p>
                  )}
                </div>
                {/* Center Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="center" className="font-regular text-base">
                    Center
                  </label>
                  <select
                    id="center"
                    name="center"
                    className="bg-transparent p-2.5 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.center}
                  >
                    <option value="">Select a center</option>
                    {centerData?.data?.records.map((center: ICenter) => (
                      <option key={center.id} value={center.id}>
                        {center.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.center && formik.errors.center && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.center}
                    </p>
                  )}
                </div>
                {/* Doctor Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="center" className="font-regular text-base">
                    Doctor
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    className="bg-transparent p-2.5 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.doctor}
                  >
                    <option value="">Select a Doctor</option>
                    {doctorData?.data?.records.map((docter: IExperts) => (
                      <option key={docter.id} value={docter.id}>
                        {docter.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.doctor && formik.errors.doctor && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.doctor}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2 col-span-2">
                  <label htmlFor="message" className="font-regular text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="bg-transparent p-3 border border-gray-400 rounded-lg outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                    rows={4}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    placeholder="Best Service On Nepal"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end col-span-2">
                  <button
                    type="submit"
                    className="bg-secondary-500 hover:bg-secondary-600 px-10 py-4 rounded-full text-white typography-paragraph-regular"
                  >
                    Next
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
        <CalendarModal
          modalOpen={modalOpen}
          onCloseModal={onCloseModal}
          setModalOpen={setModalOpen}
          data={data}
        />
      </>,
      document.body
    );
};

export default RequestAppoimentModal;
