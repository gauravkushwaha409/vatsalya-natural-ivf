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
    <div>
      <div className="bg-white hover:shadow-lg rounded-3xl max-w-md h-full overflow-hidden transition-all duration-300 ease-in-out">
        <div className="aspect-[400/240] overflow-hidden">
          {/* Image */}
          <Link href={`/blog/${data?.slug}`}>
            <Image
              src={data?.image}
              alt={`Video testimonial by ${data?.title}`}
              width={400}
              height={240}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="p-6">
          <p className="font-bold text-secondary-500 typography-paragraph-regular">
            {formatDate(data?.created_date)}
          </p>
          <Link
            className="flex justify-between items-center w-full cursor-pointer"
            href={`/blog/${data?.slug}`}
          >
            <h5 className="my-4 font-semibold text-[#1A1A1A] line-clamp-1 leading-[150%] typography-h3">
              {data?.title}
            </h5>
            <div>
              <IoArrowForwardOutline
                size={24}
                className="text-primary-500 -rotate-40"
              />
            </div>
          </Link>
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
    </div>
  );
};

export default BlogCard;
