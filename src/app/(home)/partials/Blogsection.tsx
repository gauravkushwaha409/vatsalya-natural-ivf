import BlogCard from "@/components/cards/BlogCard"
import { blogData } from "@/data/blogData"

const Blogsection = () => {
  return (
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 px-5 md:px-20">
          {blogData.slice(0,3).map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
    </div>
  )
}
export default Blogsection