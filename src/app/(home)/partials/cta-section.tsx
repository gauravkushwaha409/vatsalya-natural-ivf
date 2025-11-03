import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="py-9 lg:py-[72px] bg-[#ffd2ce] ">
      <div className="max-w-[1440px] px-4 lg:px-0 mx-auto flex flex-col  gap-8 lg:gap-20 lg:flex-row lg:items-center justify-between ">
        <div className="w-full lg:w-[100%] ">
          <p className="text-gray-800 text-2xl lg:text-[36px] font-semibold mt-2 ">
            Connect With Us
          </p>
          <p className="my-2">
            {" "}
            Page layouts look better with something in each section. Web page
            designers, content writers, and layout artists use lorem ipsum
          </p>

          <div className="mt-8">
            <Link href={"/contact-us"}>
              <button
                style={{
                  boxShadow:
                    "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
                }}
                className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer typography-paragraph-regular"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-5 lg:gap-4">
          <Link href={"/contact-us"}>
            <button
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer typography-paragraph-regular"
            >
              Contact Us
            </button>
          </Link>
          <Link href={"/contact-us"}>
            <button
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer typography-paragraph-regular"
            >
              Contact Us
            </button>
          </Link>
          <div className="bg-white py-6 px-8 rounded-3xl w-full lg:w-auto flex-1 flex flex-col items-start gap-4">
            <div className="h-[52px] w-[52px] bg-[#a03879] rounded-full flex items-center justify-center">
              <Phone className="text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Call Us</p>
              <p className="text-gray-800 text-xl font-semibold mt-1">
                +977-9701021111
              </p>
            </div>
          </div>

          <div className="bg-white py-6 px-8 rounded-3xl w-full lg:w-auto flex-1 flex flex-col items-start gap-4">
            <div className="h-[52px] w-[52px] bg-[#a03879] rounded-full flex items-center justify-center">
              <Mail className="text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Mail us anytime</p>
              <p className="text-gray-800 text-xl font-semibold mt-1">
              info@vatsalya.com.np
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CTA;
