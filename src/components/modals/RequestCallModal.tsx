"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useClickOutside from "@/hooks/useClickOutside";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  name: string;
  phone: string;
  message: string;
}
interface RequestCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RequestCallModal: React.FC<RequestCallModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [postRequestCall, { isLoading: isRequestCallLoading }] =
    usePostDataMutation();
  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),

      phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]{10}$/, "Invalid phone format"),

      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await postRequestCall({
          url: endpoints.request_call,
          data: values,
        });
        if (response?.data?.status === "error") {
          showErrorMessage(response?.data?.message);
          return;
        }
        if (response?.data?.status === "success") {
          showSuccessMessage(response?.data?.message);
          onClose();
        }
        resetForm();
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });
  const modalRef = useClickOutside(onClose);

  return (
    <>
      {isOpen && (
        <div className="z-[100] fixed inset-0 flex justify-center items-center bg-black/40 text-black">
          <section
            className="relative bg-white shadow-md px-10 py-7 rounded-lg"
            ref={modalRef}
          >
            <h1 className="typography-h3 mb-5 font-medium">Request a Call</h1>
            <button
              onClick={() => onClose()}
              className="text-2xl text-text-400 absolute top-5 right-10 cursor-pointer *:"
            >
              x
            </button>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2 sm:gap-6 w-full"
            >
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center">
                {/*  Name */}
                <div className="lg:w-1/2">
                  <label
                    className="typography-paragraph-regular font-semibold text-text-500"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter Your Name"
                    className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="pt-2 pl-4 text-red-500 text-sm">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                {/* phone */}
                <div className="lg:w-1/2">
                  <label
                    className="typography-paragraph-regular font-semibold text-text-500"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder="Enter Your Phone Number"
                    className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="pt-2 pl-4 text-red-500 text-sm">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* message */}
              <div>
                <label
                  className="typography-paragraph-regular font-semibold text-text-500"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder="Enter Your Message..."
                  className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="pt-2 pl-4 text-red-500 text-sm">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex self-end items-center bg-secondary-500 py-3 px-6 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer"
              >
                {isRequestCallLoading ? " Requesting a Call" : "Request a Call"}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default RequestCallModal;
