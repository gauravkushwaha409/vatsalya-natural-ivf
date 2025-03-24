import React from "react";
import HeroBlog from "./interfaces/HeroBlog";
import BlogCard from "./interfaces/BlogCard";
import { blogData } from "@/data/blogData";
import CustomPagination from "@/components/CustomPagination";

const Blog = () => {
  return (
    <div className="">
      <HeroBlog />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 mx-auto container">
        {blogData.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>

      {/* pagination  */}
      <CustomPagination />
    </div>
  );
};

export default Blog;
