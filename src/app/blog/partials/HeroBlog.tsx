import React from "react";
import Image from "next/image";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { IHeroBlogRoot } from "../interface/blog.hero.interface";

interface BlogsCardProps {
  data: IHeroBlogRoot[];
}

const HeroBlog: React.FC<BlogsCardProps> = ({ data }) => {
  const featureBlogs = data.filter(
    (blog: IHeroBlogRoot) => blog.type === "feature"
  );

  return (
    <>
      <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10">
        <div className="flex flex-col justify-center items-center text-center">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Blog" }]}
          />
          <h1 className="pt-3 font-bold text-secondary-500 leading-[150%] typography-h2">
            Blog & News
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative mb-12 md:mb-20 w-full h-[500px] overflow-hidden">
        <div className="z-0 absolute inset-0 border-primary-500">
          <Image
            src={featureBlogs[0]?.image}
            alt="Happy couple with newborn baby"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,185,227,0.5)_0%,rgba(234,186,181,0)_100%)]"></div>

        {/* Content */}
        <div className="z-10 relative flex flex-col justify-center items-center md:items-start px-5 md:px-12 lg:px-20 max-w-4xl h-full text-white md:text-left text-center">
          <p className="text-text-400 typography-paragraph-regular capitalize">
            {featureBlogs[0]?.type}
          </p>

          {/* Heading */}
          <h2 className="my-3.5 max-w-lg font-bold text-secondary-500 leading-[1.5] typography-h2">
            {featureBlogs[0]?.title}
          </h2>

          {/* Subheading */}
          <p
            className="mb-10 text-text-400 typography-paragraph-large max-w-lg text-justify line-clamp-6"
            dangerouslySetInnerHTML={{
              __html: featureBlogs[0]?.description || "",
            }}
          />

          {/* CTA Button */}
          <button className="px-8 py-3 border-[0.4px] border-secondary-500 rounded-[6.25rem] font-manrope font-bold text-secondary-500 cursor-pointer typography-paragraph-regular">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBlog;
