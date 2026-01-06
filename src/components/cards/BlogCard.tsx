"use client";
import { IBlogRecord } from "@/app/blog/interface/blog.interface";
import { formatDate } from "@/lib/formatData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface IBlog {
  data: IBlogRecord;
}

const BlogCard: React.FC<IBlog> = ({ data }) => {
  return (
    <>
      <div className="bg-white shadow-[0px_0px_32px_0px_#FBCED140] rounded-[32px] max-w-md h-[380px] overflow-hidden transition-all hover:-translate-y-5 duration-600 ease-in-out transform">
        <div className="w-full h-[200px]">
          {/* Image */}
          <Link href={`/blog/${data?.slug}`}>
            <Image
              src={data?.image}
              alt={`Video testimonial by ${data?.title}`}
              width={400}
              height={200}
              className="w-full h-full object-fit"
            />
          </Link>
        </div>

        <div className="p-5">
          <p className="font-medium text-[13px] text-secondary-500 leading-[120%] tracking-[-2%]">
            {formatDate(data?.created_date)}
          </p>
          <div className="flex justify-between items-center my-2.5">
            <p className="w-[80%] font-bold text-[#1A1A1A] text-[20px] line-clamp-1 leading-[120%] tracking-[-2%]">
              {data?.title}
            </p>

            <Link href={`/blog/${data?.slug}`}>
              <IoArrowForwardOutline
                size={24}
                className="w-fit text-primary-500 -rotate-40"
              />
            </Link>
          </div>
          <div
            className="font-medium text-[#667085] line-clamp-2 typography-paragraph-regular"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          <div className="flex flex-wrap gap-2 pt-4">
            {data?.tags?.map((tag, index) => (
              <div className="bg-primary-50 rounded-2xl" key={index}>
                <p
                  className={` ${
                    index % 2 == 0 ? "text-primary-400" : "text-secondary-500"
                  } typography-paragraph-small font-medium px-2.5 py-0.5`}
                >
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
