import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import photo from "@/assests/success-story/testimonial.png";
import { IoIosQuote } from "react-icons/io";

const TestimonialSection = () => {
  return (
    <div className="my-20 container mx-auto">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-wide uppercase leading-[24px]">
            A Journey of Hope
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>
        </div>

        <h1 className="typography-h4 font-semibold tracking-tight ">
          Turning Dreams into Reality with Vatsalya&apos;s Care
        </h1>
      </div>

      {/* testimonial section */}
      <div className="grid md:grid-cols-2 mt-10 gap-10 items-center">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={photo}
            alt="A family standing in front of Vatsalya sign"
            width={600}
            height={450}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <div className="flex  text-base md:text-[19.2px] font-normal text-primary-500 italic tracking-[1.92px] leading-[23.04px]">
            <span className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="quoteGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#EBC0DB" />
                    <stop offset="100%" stopColor="#FFD2CE" />
                  </linearGradient>
                </defs>
                <IoIosQuote fill="url(#quoteGradient)" />
              </svg>
            </span>
            After years of uncertainty, Vatsalya gave us hope—and now we hold
            our little miracle in our arms.
          </div>

          <div className="typography-paragraph-large font-medium text-text-400 text-justify space-y-4">
            <p>
              {`"${"For five years, we faced heartbreak after heartbreak, trying everypossible treatment without success. The emotional and physicaltoll was overwhelming, and we were close to giving up. Then we found Vatsalya. From the very first consultation, we felt a renewed sense of hope. The doctors were not only experts in fertility care but also compassionate guides who truly understood our pain. Every step of the journey was personalized, and the unwavering support we received made all the difference. Today, as we hold our little one in our arms, we know that choosing Vatsalya was the best decision we ever made."}"`}
            </p>
          </div>

          <button className="rounded-full mt-4 flex items-center gap-2 cursor-pointer">
            <div className="rounded-full p-2 border-[0.56px] border-secondary-800">
              <Play className="h-4 w-4  fill-secondary-900" />
            </div>
            <span className="typography-paragraph-regular text-secondary-800">
              Watch Video
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
