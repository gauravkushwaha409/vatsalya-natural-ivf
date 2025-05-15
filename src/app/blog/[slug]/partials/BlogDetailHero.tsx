import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";

import { IBlogDetailsBlog } from "../../interface/blogdetails.interface";
import { formatDate } from "@/lib/formatData";

interface BlogDetailHeroProps {
  data: IBlogDetailsBlog;
}
const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-5 lg:py-10">
      <div className="flex flex-col justify-center items-center text-center">
        {/* breadcrumb  */}
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Blog", link: "/blog" },
            { name: `${data?.slug}` },
          ]}
        />

        <h1 className="px-5 lg:px-[11.25rem] pt-3 font-bold text-secondary-500 leading-[150%] typography-h1">
          {data?.title}
        </h1>

        <div className="flex gap-2 pt-4">
          <p className="flex items-center gap-2 pr-2 border-[#4F565D] border-r-[0.5px] font-medium text-text-400 typography-paragraph-regular">
            <span>
              <CiCalendar />
            </span>
            {formatDate(data?.created_date)}
          </p>
          <p className="flex items-center gap-2 pr-2 border-[#4F565D] border-r-[0.5px] font-medium text-text-400 typography-paragraph-regular">
            {data?.readTime} to read
          </p>
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

      <div className="px-5 lg:px-[11.25rem]">
        <div className="lg:py-10 pt-5 aspect-[1071/428]">
          <Image
            src={data?.image}
            alt="hero blog detail"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailHero;
