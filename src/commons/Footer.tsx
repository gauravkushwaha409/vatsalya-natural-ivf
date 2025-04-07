"use client";
import { useNewsletter } from "@/hooks/subscription/useNewsletter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { formik, isLoading } = useNewsletter();
  return (
    <div className="bg-primary-100 backdrop-blur-[5.6px] padding pt-10 text-text-400 overflow-hidden">
      <div className="gap-[6.56rem] grid grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <div className="h-20 aspect-auto -ml-5">
            <Link href="/">
              <Image
                src={"/horizontal-logo.png"}
                width={100}
                height={100}
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <p className="">
            Natural IVF: Embracing Your Body’s Natural Rhythm for Parenthood.
          </p>
          <p className="flex items-center gap-[0.63]">
            <a href={`mailto:${`info@vatsalya.com`}`}>
              info@vatsalyagmail.com{" "}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
            >
              <path
                d="M15.5 3.23828H5V12.2435"
                stroke="#585858"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 6.00781H19V14.3203C19 14.6877 18.8156 15.0401 18.4874 15.2999C18.1592 15.5598 17.7141 15.7057 17.25 15.7057H10.25C9.78587 15.7057 9.34075 15.5598 9.01256 15.2999C8.68437 15.0401 8.5 14.6877 8.5 14.3203V6.00781Z"
                stroke="#585858"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <a href={`tel:${"+977 9876543210"}`}>+977 9876543210</a>
          <div className="flex gap-4 mt-5">
            <a
              className="hover:brightness-80 transition-all duration-300"
              href="https://www.facebook.com/"
            >
              <Image
                src="/svg/facebook.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
            <a
              className="hover:brightness-80 transition-all duration-300"
              href="https://www.instagram.com/"
            >
              <Image
                src="/svg/instagram.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
            <a
              className="hover:brightness-80 transition-all duration-300"
              href="https://www.linked.com/"
            >
              <Image
                src="/svg/linkedin.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
            <a
              className="hover:brightness-80 transition-all duration-300"
              href="https://www.twitter.com/"
            >
              <Image
                src="/svg/twitter.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
            <a
              className="hover:brightness-80 transition-all duration-300"
              href="https://www.whatsapp.com/"
            >
              <Image
                src="/svg/whatsapp.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Company
          </h3>
          <p>
            <Link href="/about">About Us </Link>
          </p>
          <p>
            <Link href="/services">Services </Link>
          </p>
          <p>
            <Link href="/stories">Success Stories </Link>
          </p>
          <p>
            <Link href="/contact">Contact </Link>
          </p>
          <p>
            <Link href="/career">Career </Link>
          </p>
        </div>
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Help
          </h3>

          <p>
            <Link href="/faq">FAQs</Link>
          </p>
          <p>
            <Link href="/booking">Consultation Booking</Link>
          </p>
          <p>
            <Link href="/terms">Terms & Conditions </Link>
          </p>
          <p>
            <Link href="/privacy">Privacy Policy </Link>
          </p>
        </div>
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Subscribe to Newsletter
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-3">
            <label className="flex bg-white/[0.12] px-4 py-4 border border-[#E4E4E7] rounded-[0.75rem]">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="outline-0 ring-0 placeholder:text-dark-variant-300 grow bg-transparent text-black"
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
              className="bg-secondary-500 p-4 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
      <hr className="bg-[#FFF1EF] my-5" />
      <p className="pb-5 font-roboto text-text-400 text-xs text-center typography-paragraph-regular">
        © {new Date().getFullYear()} Vatsalya. All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
