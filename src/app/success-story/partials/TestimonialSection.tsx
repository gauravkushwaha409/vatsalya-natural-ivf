"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosQuote } from "react-icons/io";
import VideoModal from "@/components/modals/VideoModal";
import { ISucessStoriesMetaData } from "../interface/sucessStoriesMeta.interface";

type testimonialData = {
  data: ISucessStoriesMetaData;
};

const TestimonialSection: React.FC<testimonialData> = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="my-20 padding relative">
      <div className=" flex flex-col items-center text-center space-y-4 ">
        <div className=" flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px] max-w-3xl">
            {data?.successStoryMainTitle}
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        {/* butterfluy gif  */}
        <div className="lg:w-[368] lg:h-[370] absolute z-10 -top-40 right-0">
          <Image
            src="/butterfly-gif.gif"
            alt="butterfly-git"
            width={800}
            height={800}
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <h1 className="typography-h2 font-semibold tracking-tight ">
          {data?.successStoryMainSubtitle}
        </h1>
      </div>

      {/* testimonial section */}
      <div className="grid md:grid-cols-2 mt-10 gap-10 items-center">
        <div className="rounded-lg overflow-hidden w-full h-[20.625rem]">
          <Image
            src={data?.SuccessStory?.image}
            alt="A family standing in front of Vatsalya sign"
            width={600}
            height={450}
            className="w-full rounded-lg h-full object-cover"
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
            {data?.SuccessStory?.quoteContent}
          </div>

          <div>
            <p
              className="typography-paragraph-large font-medium text-text-400 text-justify space-y-4"
              dangerouslySetInnerHTML={{
                __html: data?.SuccessStory?.storyContent || "",
              }}
            />
          </div>

          <button
            className="rounded-full mt-4 flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            <div className="rounded-full p-2 border-[0.56px] border-secondary-800">
              <Play className="h-4 w-4  fill-secondary-900" />
            </div>
            <span className="typography-paragraph-regular text-secondary-800">
              Watch Video
            </span>
          </button>
        </div>
      </div>
      <VideoModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        videoUrl={data?.SuccessStory?.videoUrl}
      />
    </div>
  );
};

export default TestimonialSection;
