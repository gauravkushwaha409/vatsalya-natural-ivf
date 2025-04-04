import Blogsection from "@/app/(home)/partials/Blogsection";
import BlogDescription from "./partials/BlogDescription";
import BlogDetailHero from "./partials/BlogDetailHero";
import CommentForm from "./partials/CommentFrom";
import Stats from "./partials/Stats";
import SimilarBlogs from "./partials/SimilarBlogs";

const BlogDetail = () => {
  return (
    <div className="relative">
      <BlogDetailHero />
      <div className="px-5 lg:px-[11.25rem] ">
        <div className="absolute top-[23.5rem] md:top-[33.5rem] lg:top-1/2 left-5 lg:left-20">
          <Stats />
        </div>
        <BlogDescription />
        <CommentForm />
        <SimilarBlogs />
      </div>
    </div>
  );
};

export default BlogDetail;
