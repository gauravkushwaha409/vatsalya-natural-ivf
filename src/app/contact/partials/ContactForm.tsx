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
    <div className=" flex lg:flex-row flex-col justify-center items-center gap-20 py-20">
      <div className="  w-full md:w-1/2  flex flex-col gap-5">
        <div className="flex items-center gap-3 ">
          <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
            contact
          </span>
          <div className="border border-primary-400 border-t w-21"></div>
        </div>
        <h1 className="typography-h3 font-semibold text-text-500 ">
          Get in Touch With Us
        </h1>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="typography-paragraph-regular font-semibold text-text-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
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
            <label
              htmlFor="phone"
              className="typography-paragraph-regular font-semibold text-text-500"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
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
            <label
              htmlFor="address"
              className="typography-paragraph-regular font-semibold text-text-500"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder="baneshwor, kathmandu"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="center" className="text-base font-regular">
              Center
            </label>
            <select
              id="center"
              name="center"
              className="border border-gray-400 rounded-xl p-2.5  bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium"
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
              className="typography-paragraph-regular font-semibold text-text-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 rounded-xl p-2 bg-transparent text-sm font-thinC outline-none"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Best time to contact you?"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-secondary-500 text-white py-2 px-4 rounded-full hover:bg-secondary-600 transition duration-300 ease-in-out min-w-max w-full"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <div className="  aspect-[16/16] relative rounded-lg  w-10/12 -mt-10">
          <Image
            src={pic1}
            alt="approval"
            width={1920}
            height={1920}
            unoptimized
            className="w-full h-full"
          />
          <div className="bg-white   aspect-[271/252] w-[50%] absolute -bottom-10 -right-10 pt-[0.1rem] pl-[0.1rem] rounded-l-3xl rounded-t-none  ">
            <div className="rounded-xl flex items-center justify-center flex-col  h-full w-full">
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
