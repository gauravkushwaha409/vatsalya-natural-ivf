import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { notFound } from "next/navigation";
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
    if (data?.data?.records?.length === 0) throw new Error("no_data");

    return (
      <div className="lg:mb-20">
        <HeroBlog data={FeatureData} />
        <BlogsCard data={blogData} page={page} />
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "no_data") notFound();
    }
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default BlogPage;
