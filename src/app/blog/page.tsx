import React from "react";
import HeroBlog from "./interfaces/HeroBlog";
import BlogCard from "./interfaces/BlogCard";
import { blogData } from "@/data/blogData";
import CustomPagination from "@/components/CustomPagination";

const Blog = () => {
  return (
    <div className="">
      <HeroBlog />

      <div className="mx-auto container">
        <h1 className="typography-h4 font-semibold text-text-500 ">
          Latest Blogs
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
          {blogData.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>
        {/* pagination  */}
        <CustomPagination />
      </div>
    </div>
  );
};

export default Blog;
