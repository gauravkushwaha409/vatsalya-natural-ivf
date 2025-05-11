import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { MetadataRoute } from "next";
import { IserviceData } from "./services/interfaces/services.interface";
import { IBlogData } from "./blog/interface/blog.interface";
import { IOurExpertsData } from "./our-team/interface/ourExperts.interface";
import { ICenterData } from "@/interface/center";

const siteurl = process.env.NEXT_PUBLIC_SITE_URL;
//changed

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: serviceData } = await getData<{ data: IserviceData }>(
    endpoints.service
  );

  const serviceUrls = serviceData?.records
    ?.map((service) => ({
      url: `${siteurl}services/${service?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    }))
    .flat() as MetadataRoute.Sitemap;

  const { data: blogData } = await getData<{ data: IBlogData }>(endpoints.blog);
  const blogUrls = blogData?.records
    ?.map((blog) => ({
      url: `${siteurl}blog/${blog?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 2,
    }))
    .flat() as MetadataRoute.Sitemap;

  const { data: ourTeamData } = await getData<{ data: IOurExpertsData }>(
    endpoints.experts
  );
  const ourTeamUrls = ourTeamData?.records
    ?.map((team) => ({
      url: `${siteurl}our-team/${team?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 3,
    }))
    .flat() as MetadataRoute.Sitemap;
  const { data: centerData } = await getData<{ data: ICenterData }>(
    endpoints.center
  );
  const centerDataUrls = centerData?.records
    ?.map((team) => ({
      url: `${siteurl}our-clinic/${team?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 3,
    }))
    .flat() as MetadataRoute.Sitemap;

  return [
    {
      url: `${siteurl}`,
    },
    {
      url: `${siteurl}about`,
    },
    {
      url: `${siteurl}service`,
    },
    {
      url: `${siteurl}contact`,
    },
    {
      url: `${siteurl}blog`,
    },
    {
      url: `${siteurl}international-client`,
    },
    {
      url: `${siteurl}career`,
    },
    {
      url: `${siteurl}our-clinic`,
    },
    {
      url: `${siteurl}our-team`,
    },
    {
      url: `${siteurl}faqs`,
    },
    {
      url: `${siteurl}booking`,
    },
    {
      url: `${siteurl}terms`,
    },
    {
      url: `${siteurl}privacy`,
    },
    {
      url: `${siteurl}calculator`,
    },
    {
      url: `${siteurl}ovulation-calculator`,
    },
    ...serviceUrls,
    ...blogUrls,
    ...ourTeamUrls,
    ...centerDataUrls,
  ];
}
