import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ServiceForm from "@/app/services/[slug]/partials/ServiceForms";
import React from "react";
import ArticleDetailHero from "./partials/ArticleDetailHero";
import ArticleDescription from "./partials/AtricleDescription";
import { IArticleRoot } from "./interface/article.interface";
import ErrorMessage from "@/components/ErrorMessage";
import { createMetadata } from "@/hooks/generateMetaData";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: ArticlePageProps) {
  const slug = (await params).slug;
  const { data } = await getData<IArticleRoot>(endpoints.article + `/${slug}`);
  const meta = createMetadata(data?.seo);
  return meta;
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  try {
    const slug = await params;
    const data = await getData<IArticleRoot>(
      endpoints.article + `/${slug?.slug}`
    );
    return (
      <div className="relative">
        <ArticleDetailHero data={data?.data} />
        <div className=" u-padding-x w-full flex lg:flex-row flex-col gap-10">
          <div className="w-full lg:w-2/3">
            <ArticleDescription data={data?.data} />
          </div>
          <div className="top-4 sticky my-4 w-full lg:w-1/3 h-max lg:max-h-screen lg:overflow-y-auto lg:no-scrollbar">
            <ServiceForm />
          </div>
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

export default ArticlePage;
