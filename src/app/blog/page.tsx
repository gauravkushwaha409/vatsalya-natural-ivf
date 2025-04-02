import CustomPagination from "@/components/CustomPagination";
import { blogData } from "@/data/blogData";
import BlogCard from "./partials/BlogCard";
import HeroBlog from "./partials/HeroBlog";

const Blog = () => {
  return (
    <div className="">
      <HeroBlog />

      <div className="px-5 lg:px-20">
        <h1 className="font-semibold text-text-500 typography-h4">
          Latest Blogs
        </h1>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
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
