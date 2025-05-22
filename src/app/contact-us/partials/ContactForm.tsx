"use client";
import React from "react";
import Image from "next/image";
import pic1 from "./../../../assests/contact/pic1.png";
import pic2 from "./../../../assests/contact/pic2.png";
import { useContactForm } from "@/hooks/contact/useContact";
import { ICenter } from "@/interface/center";

const ContactForm = () => {
  const { formik, isLoading, centerData } = useContactForm();

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-20 py-20">
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
            contact
          </span>
          <div className="border border-primary-400 border-t w-21"></div>
        </div>
        <h3 className="font-semibold text-text-500 typography-h3">
          Get in Touch With Us
        </h3>
        <form onSubmit={formik.handleSubmit} className="gap-4 grid grid-cols-2">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-semibold text-text-500 typography-paragraph-regular"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter Your Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-semibold text-text-500 typography-paragraph-regular"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="Enter Your Phone Number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>

          {/* Address Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="font-semibold text-text-500 typography-paragraph-regular"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder="Enter Your Address"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="center" className="font-regular text-base">
              Center
            </label>
            <select
              id="center"
              name="center"
              className="bg-transparent p-2.5 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
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

          {/* Message Field */}
          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="message"
              className="font-semibold text-text-500 typography-paragraph-regular"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-transparent p-2 border border-gray-400 rounded-xl outline-none font-thinC text-sm"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Enter Your Message..."
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-full w-full min-w-max text-white transition duration-300 ease-in-out"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="relative -mt-10 rounded-lg w-10/12 aspect-[16/16]">
          <Image
            src={pic1}
            alt="approval"
            width={1920}
            height={1920}
            unoptimized
            className="w-full h-full"
          />
          <div className="-right-10 -bottom-10 absolute bg-white pt-[0.1rem] pl-[0.1rem] rounded-t-none rounded-l-3xl w-[50%] aspect-[271/252]">
            <div className="flex flex-col justify-center items-center rounded-xl w-full h-full">
              <Image
                src={pic2}
                alt="approval"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
