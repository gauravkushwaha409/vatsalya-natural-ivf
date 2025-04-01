import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import blogDetailHero from "@/assests/blogDetail/blogDetailHero.png";

const BlogDetailHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10  ">
      <div className="flex flex-col justify-center items-center text-center ">
        {/* breadcrumb  */}
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Blog", link: "#" },
            { name: "IVF Insights" },
          ]}
        />

        <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
          IVF Insights
        </h1>

        <div className="flex gap-2 pt-4">
          <p className="flex gap-2 items-center typography-paragraph-regular text-text-400 font-medium border-r-[0.5px] border-[#4F565D] pr-2">
            <span>
              <CiCalendar />
            </span>
            1 Jan 2023
          </p>

          <div className="bg-primary-50 rounded-2xl">
            <p className="text-primary-400 typography-paragraph-small font-medium px-2.5 py-0.5">
              Mental Health
            </p>
          </div>
          <div className="bg-secondary-50 rounded-2xl">
            <p className="text-secondary-500 typography-paragraph-small font-medium px-2.5 py-0.5">
              Fertility
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-20 container">
        <div className="py-10">
          <Image
            src={blogDetailHero}
            alt="hero blog detail"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="typography-paragraph-large leading-[150%] text-text-500 text-justify">
          Endometriosis is a condition in which tissue similar to the lining of
          the uterus grows outside the uterus, often causing pain, irregular
          periods, and, for many, challenges with fertility. For individuals
          with endometriosis who are trying to conceive, in-vitro fertilization
          (IVF) can offer a promising solution. However, this condition presents
          unique challenges that require special consideration to maximize the
          chances of IVF success. Here’s what to know about the intersection of
          endometriosis and IVF.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailHero;
