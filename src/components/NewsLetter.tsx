"use client";
import { useNewsletter } from "@/hooks/subscription/useNewsletter";

const NewsLetter = () => {
  const { formik, isLoading } = useNewsletter();

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-3">
        <label
          htmlFor="email"
          aria-label="Email"
          className="flex bg-white/[0.12] px-4 py-4 border border-[#E4E4E7] rounded-[0.75rem]"
        >
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent outline-0 ring-0 text-black placeholder:text-dark-variant-300 grow"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-secondary-500 disabled:opacity-50 px-[1.88rem] py-2.5 rounded-[6.25rem] font-manrope font-bold text-white cursor-pointer typography-paragraph-regular"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
