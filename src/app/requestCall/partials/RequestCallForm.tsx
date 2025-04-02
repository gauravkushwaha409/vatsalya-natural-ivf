"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IFormValues {
  name: string;
  phone: string;
  message: string;
}

const RequestCallForm = () => {
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
        resetForm();
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Submission error:", error);
        alert("Error submitting form");
      }
    },
  });

  return (
    <section className="lg:w-3xl">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-2 gap-5 w-full"
      >
        {/*  Name */}
        <div>
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
            placeholder="e.g. Sujata Khatri "
            className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="pt-2 pl-4 text-red-500 text-sm">
              {formik.errors.name}
            </p>
          )}
        </div>

        {/* phone */}
        <div className="">
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
            placeholder="e.g. 9876543210"
            className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="pt-2 pl-4 text-red-500 text-sm">
              {formik.errors.phone}
            </p>
          )}
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
            placeholder="|"
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
          className="flex self-end col-span-2 w-fit items-center bg-secondary-500 py-3 px-6 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer"
        >
          Request a Call
        </button>
      </form>
    </section>
  );
};

export default RequestCallForm;
