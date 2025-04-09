import React from "react";
import HeroCareerDetail from "./partials/HeroCareerDetail";
import CareerTextContent from "./partials/CareerTextContent";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}
const CareerDetail = async ({ params }: BlogDetailPageProps) => {
  const slug = await params;
  const data = await getData(endpoints.openPosition + `/slug/${slug?.slug}`);
  return (
    <div>
      <HeroCareerDetail data={data?.data} />
      <CareerTextContent data={data?.data} />
    </div>
  );
};

export default CareerDetail;
