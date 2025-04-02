"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";

interface IFormValues {
  name: string;
  email: string;
  comment: string;
}

const CommentForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),

      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

      comment: Yup.string()
        .required("Comment is required")
        .min(10, "Comment must be at least 10 characters"),
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

  useEffect(() => {
    try {
      const storage = localStorage.getItem("commentForm");
      if (!isChecked) {
        localStorage.removeItem("commentForm");
      }
      if (storage) {
        const commentStorage: { name: string; email: string } =
          JSON.parse(storage);
        formik.setFieldValue("name", commentStorage.name);
        formik.setFieldValue("email", commentStorage.email);
        setIsChecked(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [isChecked, formik]);

  return (
    <section className="padding mt-10 mb-20">
      <h1 className="typography-h5 font-medium text-[#333] pb-5">
        Leave a Comment
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 sm:gap-6 max-w-[1280px]"
      >
        {/* comment */}
        <div>
          <label
            className="typography-paragraph-regular font-semibold text-text-500"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            placeholder="Comment"
            className="bg-transparent p-3 pt-6 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full mt-2.5 h-[185px] text-sm"
          />
          {formik.touched.comment && formik.errors.comment && (
            <p className="pt-2 pl-4 text-red-500 text-sm">
              {formik.errors.comment}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/*  Name */}
          <div className="w-full lg:w-1/2">
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

          {/* Email */}
          <div className="w-full lg:w-1/2">
            <label
              className="typography-paragraph-regular font-semibold text-text-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="e.g. ritimashrestha@gmail.com"
              className="bg-transparent p-3 pl-6 border-[0.3px] border-[#72796F] rounded-[12px] outline-none w-full h-[54px] mt-2.5 text-sm"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="pt-2 pl-4 text-red-500 text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* save in my requirement */}
        <div className="flex items-center gap-3 ml-2">
          <div className="inline-block relative w-5 h-4 sm:w-4">
            <input
              type="checkbox"
              id="custom-checkbox"
              className="peer hidden"
              checked={isChecked}
              onChange={handleToggle}
            />
            <label
              htmlFor="custom-checkbox"
              className="absolute inset-0 flex justify-center items-center peer-checked:bg-text-300 border-2 border-text-300 peer-checked:border-text-300 rounded-[4px] cursor-pointer"
            >
              {/* Checkmark Vector */}
              {isChecked && <FaCheck className="text-white" size={24} />}
            </label>
          </div>

          <p className="typography-paragraph-regular text-text-500">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex self-start bg-secondary-500 py-3 px-6 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
