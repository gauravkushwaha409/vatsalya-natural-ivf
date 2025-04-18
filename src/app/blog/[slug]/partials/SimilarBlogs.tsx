import BlogCard from "@/components/cards/BlogCard";
import React from "react";
import { IBlogDetailsRelatedBlog } from "../../interface/blogdetails.interface";

interface SimilarBlogsProps {
  data: IBlogDetailsRelatedBlog[];
}
const SimilarBlogs: React.FC<SimilarBlogsProps> = ({ data }) => {
  return (
    <section className="my-10 ">
      {data?.length > 0 && (
        <h2 className="pb-10 font-semibold typography-h3">Similar Blogs</h2>
      )}
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </section>
  );
};

export default SimilarBlogs;
