import BlogDescription from "./partials/BlogDescription";
import BlogDetailHero from "./partials/BlogDetailHero";
import CommentForm from "./partials/CommentFrom";
import Stats from "./partials/Stats";
import SimilarBlogs from "./partials/SimilarBlogs";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}
const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  try {
    const slug = await params;
    const data = await getData(endpoints.blog + `/${slug?.slug}`);

    return (
      <div className="relative">
        <BlogDetailHero data={data?.data?.blog} />
        <div className="px-5 lg:px-[11.25rem]">
          <div className="absolute top-[23.5rem] md:top-[33.5rem] lg:top-1/2 left-5 lg:left-20">
            <Stats />
          </div>
          <BlogDescription data={data?.data?.blog} />
          <CommentForm slug={slug?.slug} />
          <SimilarBlogs data={data?.data?.relatedBlogs} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <ErrorMessage />
      </div>
    );
  }
};

export default BlogDetail;
