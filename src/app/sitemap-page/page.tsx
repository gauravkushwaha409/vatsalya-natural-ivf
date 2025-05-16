import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { ICenterData } from "@/interface/center";
import { IBlogData } from "../blog/interface/blog.interface";
import { IOurExpertsData } from "../our-team/interface/ourExperts.interface";
import { IserviceData } from "../services/interfaces/services.interface";
import { SitemapContent } from "./partials/SitemapContent";

export default async function SitemapPage() {
  // Fetch data (same as sitemap.ts)
  const { data: serviceData } = await getData<{ data: IserviceData }>(
    endpoints.service
  );
  const { data: blogData } = await getData<{ data: IBlogData }>(endpoints.blog);
  const { data: ourTeamData } = await getData<{ data: IOurExpertsData }>(
    endpoints.experts
  );
  const { data: centerData } = await getData<{ data: ICenterData }>(
    endpoints.center
  );

  return (
    <SitemapContent
      blogData={blogData.records}
      centerData={centerData.records}
      ourTeamData={ourTeamData.records}
      serviceData={serviceData.records}
    />
  );
}
