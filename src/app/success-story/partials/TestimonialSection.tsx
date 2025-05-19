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
    <div className="relative my-20 padding">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex justify-center items-center gap-4 w-full max-w-3xl">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="max-w-3xl font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            {data?.successStoryMainTitle}
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>

        {/* butterfluy gif  */}
        <div className="-top-40 right-0 z-10 absolute lg:w-[368] lg:h-[370]">
          <Image
            src="/butterfly-gif.gif"
            alt="butterfly-git"
            width={800}
            height={800}
            className="opacity-30 w-full h-full object-cover"
          />
        </div>

        <h3 className="font-semibold tracking-tight typography-h2">
          {data?.successStoryMainSubtitle}
        </h3>
      </div>

      {/* testimonial section */}
      <div className="items-center gap-10 grid md:grid-cols-2 mt-10">
        <div className="rounded-lg w-full h-[20.625rem] overflow-hidden">
          <Image
            src={data?.SuccessStory?.image}
            alt="A family standing in front of Vatsalya sign"
            width={600}
            height={450}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="flex font-normal text-primary-500 md:text-[19.2px] text-base italic leading-[23.04px] tracking-[1.92px]">
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
              className="space-y-4 font-medium text-text-400 text-justify typography-paragraph-large"
              dangerouslySetInnerHTML={{
                __html: data?.SuccessStory?.storyContent || "",
              }}
            />
          </div>

          <button
            className="flex items-center gap-2 mt-4 rounded-full cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            <div className="p-2 border-[0.56px] border-secondary-800 rounded-full">
              <Play className="fill-secondary-900 w-4 h-4" />
            </div>
            <span className="text-secondary-800 typography-paragraph-regular">
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
