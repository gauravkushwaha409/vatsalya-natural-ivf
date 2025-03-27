import React from "react";
import BlogDetailHero from "./interfaces/BlogDetailHero";
import BlogDescription from "./interfaces/BlogDescription";
import CommentForm from "./interfaces/CommentFrom";
import Stats from "./interfaces/Stats";

const BlogDetail = () => {
  return (
    <div>
      <BlogDetailHero />
      <div className="mx-auto container">
        <div className="flex gap-4 mx-8 lg:mx-0 lg:gap-20">
          <Stats />
          <BlogDescription />
        </div>
        <CommentForm />
      </div>
    </div>
  );
};

export default BlogDetail;
