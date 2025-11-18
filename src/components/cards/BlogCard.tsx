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
      <div className="max-w-md overflow-hidden bg-white shadow-[0px_0px_32px_0px_#FBCED140] rounded-[32px] h-[412px] transition-all duration-300 transform hover:-translate-y-2 ease-in-out">
        <div className="aspect-[311/240] overflow-hidden">
          {/* Image */}
          <Link href={`/blog/${data?.slug}`}>
            <Image
              src={data?.image}
              alt={`Video testimonial by ${data?.title}`}
              width={400}
              height={240}
              className="object-cover w-full h-full"
            />
          </Link>
        </div>

        <div className="p-5 ">
          <p className="font-medium text-secondary-500 text-[13px] leading-[120%] tracking-[-2%]">
            {formatDate(data?.created_date)}
          </p>
          <div className="flex justify-between my-2.5 items-center">
            <p className=" w-[80%] font-bold text-[#1A1A1A] line-clamp-1  leading-[120%] tracking-[-2%] text-[20px]">
              {data?.title}
            </p>

            <Link href={`/blog/${data?.slug}`}>
              <IoArrowForwardOutline
                size={24}
                className=" w-fit text-primary-500 -rotate-40"
              />
            </Link>
          </div>
          <p
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
