import { IBlogData } from "@/app/blog/interface/blog.interface";
import BlogCard from "@/components/cards/BlogCard";

type BlogCardProps = {
  data: IBlogData;
};
const Blogsection: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <div className="pb-6 sm:pb-24 padding">
      <div className="flex items-center gap-3 pb-2">
        <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
          Blogs
        </span>
        <div className="border border-primary-400 border-t w-21"></div>
      </div>
      <h2 className="pb-7.5 font-semibold typography-h2">
        Latest News & Articles{" "}
      </h2>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.records?.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </div>
  );
};
export default Blogsection;
