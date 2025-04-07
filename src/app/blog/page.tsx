import HeroBlog from "./partials/HeroBlog";
import BlogsCard from "./partials/BlogsCard";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

interface BlogProps {
  params: Promise<{ slug: string }>;

  searchParams?: Promise<{
    page?: string | string[];
  }>;
}

const Blog = async ({ searchParams }: BlogProps) => {
  try {
    const page = (await Number((await searchParams)?.page)) || 1;
    const perPage = 12;
    const data = await getData(
      endpoints.blog + `?page=${page}&perPage=${perPage}`
    );
    const blogData = data?.data;
    return (
      <div className="">
        <HeroBlog />
        <BlogsCard data={blogData} page={page} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default Blog;
