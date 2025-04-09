import { getData } from "@/api/axios";
import { BASE_API_URL, endpoints } from "@/api/endpoints";
import BlogsCard from "./partials/BlogsCard";
import HeroBlog from "./partials/HeroBlog";

interface BlogProps {
  params: Promise<{ slug: string }>;

  searchParams?: Promise<{
    page?: string | string[];
  }>;
}

export const dynamic = "force-dynamic";

const Blog = async ({ searchParams }: BlogProps) => {
  console.log(BASE_API_URL, "api url");
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
