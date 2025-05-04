import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";

import { formatDate } from "@/lib/formatData";
import { IArticleData } from "../interface/article.interface";

interface BlogDetailHeroProps {
  data: IArticleData;
}
const ArticleDetailHero: React.FC<BlogDetailHeroProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-5 lg:py-10  ">
      <div className="flex flex-col justify-center items-center text-center ">
        {/* breadcrumb  */}
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Article", link: `/article/${data?.slug}` },
            { name: `${data?.slug}` },
          ]}
        />

        <h1 className="text-secondary-500 font-bold leading-[150%] typography-h1 pt-3 ">
          {data?.title}
        </h1>

        <div className="flex gap-2 pt-4">
          <p className="flex gap-2 items-center typography-paragraph-regular text-text-400 font-medium border-r-[0.5px] border-[#4F565D] pr-2">
            <span>
              <CiCalendar />
            </span>
            {formatDate(data?.created_date)}
          </p>
          <p className="flex gap-2 items-center typography-paragraph-regular text-text-400 font-medium border-r-[0.5px] border-[#4F565D] pr-2">
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
    </div>
  );
};

export default ArticleDetailHero;
