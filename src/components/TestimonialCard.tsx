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
      <div className="bg-white shadow-md rounded-[1.125rem] max-w-md">
        <div className="relative h-[240px]">
          {/* Video Thumbnail */}
          <Image
            src={data?.image}
            alt={`Video testimonial by ${data?.quoteContent}`}
            width={400}
            height={240}
            className="rounded-t-lg w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,0.20)] rounded-t-lg"></div>
          {/* Play Button */}
          <button
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            aria-label="Play video"
            onClick={() => {
              setIsOpenModal?.(true);
              setVideoUrl?.(data?.videoUrl); // send the video url
            }}
          >
            <Play className="fill-[#FFF1EF] w-14 h-14 text-[#FFF1EF]" />
          </button>
        </div>

        <div className="relative p-6">
          <div className="-top-6 left-6 absolute flex justify-center items-center bg-gradient-to-b from-[#FFD2CE] to-[#EBC0DB] rounded-full w-16 h-16">
            <ImQuotesLeft className="text-white" size={30} />
          </div>

          <div className="pt-6">
            <p
              className=" text-text-400 line-clamp-3 typography-paragraph-large"
              dangerouslySetInnerHTML={{ __html: data?.storyContent || "" }}
            />
            <button className="text-primary-400 text-base font-semibold mb-4 cursor-pointer mt-1">
              <ReadMoreModal
                text="Read More"
                title={data?.storyContent}
                characterName={data?.characterName}
              />
            </button>
            <p className="font-semibold text-text-500 typography-paragraph-large">
              {data?.characterName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
