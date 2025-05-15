import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import BlogsCard from "./partials/BlogsCard";
import HeroBlog from "./partials/HeroBlog";
export const dynamic = "force-dynamic";

interface BlogProps {
  params: Promise<{ slug: string }>;

  searchParams?: Promise<{
    page?: string | string[];
  }>;
}
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.blog);
  const meta = createMetadata(data);
  return meta;
}
const BlogPage = async ({ searchParams }: BlogProps) => {
  try {
    const page = (await Number((await searchParams)?.page)) || 1;
    const perPage = 10;
    const data = await getData(
      endpoints.blog + `?page=${page}&perPage=${perPage}`
    );
    const blogData = data?.data;
    const FeatureData = data?.data?.records;

    return (
      <div className="">
        <HeroBlog data={FeatureData} />
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

export default BlogPage;
