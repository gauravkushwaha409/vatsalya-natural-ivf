"use client";
import CustomPagination from "@/components/CustomPagination";
import { blogData } from "@/data/blogData";
import { useState } from "react";
import BlogCard from "../../components/cards/BlogCard";
import HeroBlog from "./partials/HeroBlog";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="">
      <HeroBlog />

      <div className="padding">
        <h1 className="font-semibold text-text-500 typography-h3">
          Latest Blogs
        </h1>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
          {blogData.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>
        {/* pagination  */}
        <CustomPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageCount={5}
          perPage={5}
          totalItems={10}
        />
      </div>
    </div>
  );
};

export default Blog;
