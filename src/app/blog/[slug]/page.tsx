import BlogDescription from "./partials/BlogDescription";
import BlogDetailHero from "./partials/BlogDetailHero";
import CommentForm from "./partials/CommentFrom";
// import Stats from "./partials/Stats";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { createMetadata } from "@/hooks/generateMetaData";
import SimilarBlogs from "./partials/SimilarBlogs";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const slug = await params;
  const data = await getData(endpoints.blog + `/${slug?.slug}`);
  const images = [{ url: data.data.blog.image }];
  const meta = createMetadata(data.data.blog.seo, images);
  return meta;
}


const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  try {
    const slug = await params;
    const data = await getData(endpoints.blog + `/${slug?.slug}`);

    return (
      <div className="relative">
        <BlogDetailHero data={data?.data?.blog} />
        <div className="px-5 lg:px-[11.25rem]">
          {/* <div className="block top-[23.5rem] md:top-[33.5rem] lg:top-1/2 left-5 lg:left-20 lg:absolute">
            <Stats />
          </div> */}
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
