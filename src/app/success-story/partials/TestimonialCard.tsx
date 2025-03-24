"use client";

import Image, { StaticImageData } from "next/image";
import { Play } from "lucide-react";
import { ImQuotesLeft } from "react-icons/im";

interface TestimonialCardProps {
  data: {
    name: string;
    testimonial: string;
    videoThumbnail: string | StaticImageData;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  data,
}: TestimonialCardProps) => {
  return (
    <div className=" max-w-md rounded-lg  bg-white shadow-md">
      <div className="relative">
        {/* Video Thumbnail */}
        <Image
          src={data?.videoThumbnail}
          alt={`Video testimonial by ${data?.name}`}
          width={400}
          height={240}
          className="rounded-t-lg w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,0.20)]"></div>

        {/* Play Button */}
        <button
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          aria-label="Play video"
        >
          <Play className="w-14 h-14 text-[#FFF1EF] fill-[#FFF1EF]" />
        </button>
      </div>

      <div className="p-6 relative">
        <div
          className="absolute -top-6 left-6 flex items-center justify-center w-16 h-16 rounded-full 
    bg-gradient-to-b from-[#FFD2CE] to-[#EBC0DB]"
        >
          <ImQuotesLeft className="text-white " size={30} />
        </div>

        <div className="pt-6">
          <p className="typography-paragraph-large text-text-400 mb-4 ">
            {data?.testimonial}
          </p>
          <p className="typography-paragraph-large font-semibold text-text-500 ">
            {data?.name}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
