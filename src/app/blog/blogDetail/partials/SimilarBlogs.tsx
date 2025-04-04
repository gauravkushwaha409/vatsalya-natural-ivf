import BlogCard from "@/components/cards/BlogCard";
import { blogData } from "@/data/blogData";
import React from "react";

const SimilarBlogs = () => {
  return (
    <section className="my-10 ">
      <h2 className="pb-10 font-semibold typography-h3">Similar Blogs</h2>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {blogData.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </section>
  );
};

export default SimilarBlogs;
