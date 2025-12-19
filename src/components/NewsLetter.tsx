"use client";
import { useNewsletter } from "@/hooks/subscription/useNewsletter";

const NewsLetter = () => {
  const { formik, isLoading } = useNewsletter();

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-row lg:flex-col gap-4 lg:gap-2"
      >
        <label
          htmlFor="email"
          aria-label="Email"
          className="flex bg-transparent px-4 py-2.5 border-[0.5px] border-[#D1D1D1] rounded-full"
        >
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="text-black bg-transparent outline-0 ring-0 placeholder:text-[#71717A] grow"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
        {formik.touched.email && formik.errors.email && (
          <p className="ml-4 text-sm text-red-500">{formik.errors.email}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-secondary-500 disabled:opacity-50 px-[1.88rem] py-2.5 rounded-[6.25rem] font-manrope font-bold text-white cursor-pointer typography-paragraph-regular"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </>
  );
};

export default NewsLetter;
