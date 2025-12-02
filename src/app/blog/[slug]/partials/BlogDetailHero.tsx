import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";
import { CiCalendar, CiClock1 } from "react-icons/ci";

import { IBlogDetailsBlog } from "../../interface/blogdetails.interface";
import { formatDate } from "@/lib/formatData";

interface BlogDetailHeroProps {
  data: IBlogDetailsBlog;
}
const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-5 lg:py-10 padding">
      <div className="flex flex-col ">
        {/* breadcrumb  */}
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Blog", link: "/blog" },
            { name: `${data?.slug}` },
          ]}
        />

        <h1 className=" pt-3 font-extrabold text-secondary-500 leading-[150%] typography-h1">
          {data?.title}
        </h1>

        <div className="flex gap-2 pt-4">
          <p className="flex items-center gap-2 pr-3 border-[#4F565D] border-r-[0.5px] font-medium text-text-400 typography-paragraph-regular">
            <CiCalendar />

            {formatDate(data?.created_date)}
          </p>
          <p className="flex items-center gap-2 pr-3 border-[#4F565D] border-r-[0.5px] font-medium text-text-400 typography-paragraph-regular">
            <CiClock1 />
            {data?.readTime} to read
          </p>
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
      <div className="lg:py-10 mt-5 aspect-[1071/428] rounded-[100px]">
        <Image
          src={data?.image}
          alt="hero blog detail"
          width={400}
          height={400}
          className="w-full h-full object-fill rounded-[100px]"
        />
      </div>
    </div>
  );
};

export default BlogDetailHero;
