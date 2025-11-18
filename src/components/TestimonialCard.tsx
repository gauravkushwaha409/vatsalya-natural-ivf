"use client";
import { IsuccessStoriesRecord } from "@/app/success-story/interface/successStories.interface";
import { Play } from "lucide-react";
import Image from "next/image";

import { ImQuotesLeft } from "react-icons/im";
import ReadMoreModal from "./modals/ReadMoreModal";

interface TestimonialCardProps {
  data: IsuccessStoriesRecord;
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoUrl?: React.Dispatch<React.SetStateAction<string>>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  data,
  setIsOpenModal,
  setVideoUrl,
}: TestimonialCardProps) => {
  return (
    <>
      <div className="bg-white rounded-[42px] w-full">
        <div className="relative h-[240px]">
          {/* Video Thumbnail */}
          <Image
            src={data?.image}
            alt={`Video testimonial by ${data?.quoteContent}`}
            width={400}
            height={240}
            className="rounded-t-[42px] w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,0.20)] rounded-t-[42px]" />

          {/* Play Button */}
          <div className="flex items-center justify-center absolute inset-0">
            <button
              className=" flex justify-center border-[1.1px] border-white rounded-full w-20 h-20 items-center cursor-pointer"
              aria-label="Play video"
              onClick={() => {
                setIsOpenModal?.(true);
                setVideoUrl?.(data?.videoUrl);
              }}
            >
              <Play className="fill-white w-[35px] h-[35px] text-white" />
            </button>
          </div>
        </div>

        <div className="relative p-6 pb-4">
          <div className="-top-6 left-6 absolute flex justify-center items-center bg-[#FF6F61] rounded-full w-[50px] h-[50px]">
            <ImQuotesLeft className="text-white w-[24px] h-[16px]" />
          </div>

          <div className="pt-2">
            <p
              className="text-text-400 line-clamp-3 text-[13px] leading-[170%] tracking-[-1%] prose"
              dangerouslySetInnerHTML={{ __html: data?.storyContent || "" }}
            />

            <p className="font-bold text-text-500 typography-paragraph-large mt-3 border-b-[0.35px] border-b-[#C8C8C8] pb-4">
              {data?.characterName}
            </p>

            <div className="text-center font-medium text-primary-400 mt-2 ">
              <ReadMoreModal
                text="Read More"
                title={data?.storyContent}
                characterName={data?.characterName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
