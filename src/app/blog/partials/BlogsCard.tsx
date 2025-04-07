"use client";
import BlogCard from "@/components/cards/BlogCard";
import CustomPagination from "@/components/CustomPagination";
import React, { useState } from "react";
import { IBlogData, IBlogRecord } from "../interface/blog.interface";
import { useRouter } from "next/navigation";
import usePaginationChange from "@/hooks/usePaginationChange";

interface BlogsCardProps {
  data: IBlogData;
  page: number;
}

const BlogsCard: React.FC<BlogsCardProps> = ({ data }) => {
  const { handlePageChange, currentPage } = usePaginationChange();

  return (
    <div>
      <div className="padding">
        <h1 className="font-semibold text-text-500 typography-h3">
          Latest Blogs
        </h1>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
          {data?.records?.map((blog: IBlogRecord, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>

        <CustomPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageCount={data?.totalPages}
          perPage={5}
          totalItems={10}
        />
      </div>
    </div>
  );
};

export default BlogsCard;
