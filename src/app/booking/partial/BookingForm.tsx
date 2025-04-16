"use client";

import { ICenter } from "@/interface/center";
import { IExperts } from "@/interface/experts";
import React from "react";
import { useBookingForm } from "../hooks/BookingFormHooks";

export interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}

const BookingForm = () => {
  const { centerData, doctorData, formik, isBookingLoading } = useBookingForm();
  return (
    <div className="w-full">
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
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
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
            <p className="text-red-500 text-sm">{formik.errors.address}</p>
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
            <p className="text-red-500 text-sm">{formik.errors.center}</p>
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
            <p className="text-red-500 text-sm">{formik.errors.doctor}</p>
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
            <p className="text-red-500 text-sm">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end col-span-2">
          <button
            type="submit"
            className="bg-secondary-500 hover:bg-secondary-600 px-10 py-4 rounded-full text-white cursor-pointer typography-paragraph-regular"
          >
            {isBookingLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
