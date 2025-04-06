"use client";
import { IBlogRecord } from "@/app/blog/interface/blog.interface";
import { formatDate } from "@/lib/formatData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface IBlog {
  data: IBlogRecord;
}

const BlogCard: React.FC<IBlog> = ({ data }) => {
  const router = useRouter();
  const handleRedirect = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <div>
      <div className="max-w-md rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-lg  ">
        <div className="aspect-[400/240] overflow-hidden">
          {/* Image */}
          <Image
            src={data?.image}
            alt={`Video testimonial by ${data?.title}`}
            width={400}
            height={240}
            className="rounded-t-lg w-full h-full object-cover"
            onClick={() => handleRedirect(data?.slug)}
          />
        </div>

        <div className="p-6 ">
          <p className="typography-paragraph-regular text-secondary-500 font-bold">
            {formatDate(data?.created_date)}
          </p>
          <button
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={() => handleRedirect(data?.slug)}
          >
            <h5 className="typography-h3 font-semibold text-[#1A1A1A] my-4 leading-[150%] line-clamp-1">
              {data?.title}
            </h5>

            <IoArrowForwardOutline size={24} className="-rotate-40" />
          </button>
          <p
            className="typography-paragraph-regular font-medium text-[#667085] line-clamp-2 "
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          <div className="flex gap-2 pt-4">
            {data?.tags?.map((tag, index) => (
              <>
                <div className="bg-primary-50 rounded-2xl" key={index}>
                  <p
                    className={` ${
                      index % 2 == 0 ? "text-primary-400" : "text-secondary-500"
                    } typography-paragraph-small font-medium px-2.5 py-0.5`}
                  >
                    {tag}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
