import { IBlogData } from "@/app/blog/interface/blog.interface";
import BlogCard from "@/components/cards/BlogCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  data: IBlogData;
};
const Blogsection: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <div className="pb-6 sm:pb-24 padding">
      <div className="flex items-start justify-between ">
        <div>
          <div className="flex items-center gap-3 pb-2">
            <span className="font-bold tracking-widest uppercase text-primary-500 typography-paragraph-regular">
              Blogs
            </span>
            <div className="border border-t border-primary-400 w-21"></div>
          </div>

          <h2 className="pb-7.5 font-semibold typography-h2">
            Latest News & Articles
          </h2>
        </div>
        <Link
          href={"/blog"}
          className="text-primary-500 hover:text-primary-600 text-[13px] leading-[120%] tracking-[-2%]  flex items-center gap-1"
        >
          View All <ChevronRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.records?.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </div>
  );
};
export default Blogsection;
