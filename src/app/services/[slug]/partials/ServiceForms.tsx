"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ICenter } from "@/interface/center";
import { IExperts } from "@/interface/experts";
import { showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}

const ServiceForm = () => {
  const [postAppointment] = usePostDataMutation();

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
      try {
        const response = await postAppointment({
          url: endpoints.appointment,
          data: values,
        });
        if (response?.data?.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });
  const { data: centerData } = useGetDataQuery({
    url: `${endpoints.center}`,
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

  return (
    <section className="relative">
      <div className="  w-full   text-black pb-7  sticky top-0 ">
        <div
          className="  w-full bg-secondary-50/30 px-5 py-7 rounded-lg  "
          style={{ boxShadow: "0px 4px 22.6px 7px rgba(0, 0, 0, 0.06)" }}
        >
          <h1 className="typography-paragraph-large font-medium border-b-2 border-secondary-100 pb-2.5 text-center ">
            Request a Call
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 gap-4 text-text-500 typography-paragraph-regular font-semibold py-2.5"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-regular">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="e.g. Sujata Khatri "
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-base font-regular">
                Phone No.
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="e.g. 9876543210"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>

            {/* Address Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-base font-regular">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                placeholder="e.g. Gaushala, Kathmandu "
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-sm">{formik.errors.address}</p>
              )}
            </div>
            {/* Center Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="center" className="text-base font-regular">
                Center
              </label>
              <select
                id="center"
                name="center"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium"
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
                <p className="text-red-500 text-sm">{formik.errors.center}</p>
              )}
            </div>
            {/* Doctor Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="center" className="text-base font-regular">
                Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium"
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
                <p className="text-red-500 text-sm">{formik.errors.doctor}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base font-regular">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder=" message"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex ">
              <button className=" cursor-pointer bg-secondary-500 hover:bg-secondary-600 text-white py-4 px-10 rounded-full typography-paragraph-regular">
                Request a Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
