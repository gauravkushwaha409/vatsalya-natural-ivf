import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface IBlog {
  data: {
    date: string;
    title: string;
    desc: string;
    blogImg: string | StaticImageData;
    tags: string[];
  };
}

const BlogCard: React.FC<IBlog> = ({ data }) => {
  return (
    <div>
      <div className=" max-w-md rounded-lg bg-white shadow-md">
        <div className="">
          {/* Image */}
          <Image
            src={data?.blogImg}
            alt={`Video testimonial by ${data?.title}`}
            width={400}
            height={240}
            className="rounded-t-lg w-full object-cover"
          />
        </div>

        <div className="p-6 ">
          <p className="typography-paragraph-regular text-secondary-500 font-bold">
            {data?.date}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <h5 className="typography-h5 font-semibold text-[#1A1A1A] my-4 leading-[150%]">
                {data?.title}
              </h5>
            </div>
            <div>
              <IoArrowForwardOutline size={24} className="-rotate-40" />
            </div>
          </div>
          <p className="typography-paragraph-regular font-medium text-[#667085] line-clamp-2 ">
            {data?.desc}
          </p>

          <div className="flex gap-2 pt-4">
            <div className="bg-primary-50 rounded-2xl">
              <p className="text-primary-400 typography-paragraph-small font-medium px-2.5 py-0.5">
                {data?.tags?.[0]}
              </p>
            </div>
            <div className="bg-secondary-50 rounded-2xl">
              <p className="text-secondary-500 typography-paragraph-small font-medium px-2.5 py-0.5">
                {data?.tags?.[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
