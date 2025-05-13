"use client";
import { useRequestCall } from "@/hooks/requestcall/useRequestCall";

const RequestCallForm = () => {
  const { formik, isLoading } = useRequestCall();

  return (
    <section className="lg:w-3xl">
      <form
        onSubmit={formik.handleSubmit}
        className="gap-5 grid grid-cols-2 w-full"
      >
        {/*  Name */}
        <div>
          <label
            className="font-semibold text-text-500 typography-paragraph-regular"
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
            className="bg-transparent mt-2.5 p-3 pl-6 border-[#72796F] border-[0.3px] rounded-[12px] outline-none w-full h-[54px] text-sm"
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
            className="font-semibold text-text-500 typography-paragraph-regular"
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
            className="bg-transparent mt-2.5 p-3 pl-6 border-[#72796F] border-[0.3px] rounded-[12px] outline-none w-full h-[54px] text-sm"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="pt-2 pl-4 text-red-500 text-sm">
              {formik.errors.phone}
            </p>
          )}
        </div>

        {/* message */}
        <div className="col-span-2">
          <label
            className="font-semibold text-text-500 typography-paragraph-regular"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Enter Your Message..."
            className="bg-transparent mt-2.5 p-3 pl-6 border-[#72796F] border-[0.3px] rounded-[12px] outline-none w-full h-auto min-h-max text-sm resize-none"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="pt-1 text-red-500 text-sm">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center self-end col-span-2 bg-secondary-500 px-6 py-3 rounded-[6.25rem] w-fit font-manrope font-bold text-white cursor-pointer typography-paragraph-regular"
        >
          {isLoading ? "Submitting..." : "Request a Call"}
        </button>
      </form>
    </section>
  );
};

export default RequestCallForm;
