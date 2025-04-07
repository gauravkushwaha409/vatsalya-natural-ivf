"use client";
import React from "react";

import { FaCheck } from "react-icons/fa";
import { useBlog } from "@/hooks/blog/useBlog";

const CommentForm = ({ slug }: { slug: string }) => {
  const { formik, handleToggle, isChecked, isLoading } = useBlog({ slug });

  return (
    <section className=" mt-10 mb-20">
      <h1 className="typography-h4 font-medium text-[#333] pb-5">
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
        <label
          htmlFor="custom-checkbox"
          className="flex items-center gap-3 ml-2 cursor-pointer"
        >
          <div className="inline-block relative w-6 h-4 sm:w-4">
            <input
              type="checkbox"
              id="custom-checkbox"
              className="peer hidden"
              checked={isChecked}
              onChange={handleToggle}
            />
            <div className="absolute inset-0 flex justify-center items-center peer-checked:bg-primary-500 border-2 border-text-300 peer-checked:border-primary-500 rounded-[4px]">
              {isChecked && <FaCheck className="text-white lg:w-20 0" />}
            </div>
          </div>

          <p className="typography-paragraph-regular text-text-500">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="flex self-start bg-secondary-500 py-3 px-6 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
