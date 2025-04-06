import BlogDescription from "./partials/BlogDescription";
import BlogDetailHero from "./partials/BlogDetailHero";
import CommentForm from "./partials/CommentFrom";
import Stats from "./partials/Stats";
import SimilarBlogs from "./partials/SimilarBlogs";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}
const BlogDetail = async ({ params }: BlogDetailProps) => {
  try {
    const slug = await params.slug;
    const data = await getData(endpoints.blog + `/${slug}`);
    return (
      <div className="relative">
        <BlogDetailHero data={data?.data?.blog} />
        <div className="px-5 lg:px-[11.25rem] ">
          <div className="absolute top-[23.5rem] md:top-[33.5rem] lg:top-1/2 left-5 lg:left-20">
            <Stats />
          </div>
          <BlogDescription data={data?.data?.blog} />
          <CommentForm slug={slug} />
          <SimilarBlogs data={data?.data?.relatedBlogs} />
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error fetching blog details:", error);
    <ErrorMessage />;
  }
};

export default BlogDetail;
