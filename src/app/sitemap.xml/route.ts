// app/sitemap.xml/route.ts
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { ICenterData } from "@/interface/center";
import { IserviceData } from "../services/interfaces/services.interface";
import { IBlogData } from "../blog/interface/blog.interface";
import { IOurExpertsData } from "../our-team/interface/ourExperts.interface";

const siteurl = process.env.NEXT_PUBLIC_SITE_URL;
const currentDate = new Date().toISOString();

export async function GET() {
  // Fetch all data in parallel
  const [
    { data: serviceData },
    { data: blogData },
    { data: ourTeamData },
    { data: centerData },
  ] = await Promise.all([
    getData<{ data: IserviceData }>(endpoints.service),
    getData<{ data: IBlogData }>(endpoints.blog),
    getData<{ data: IOurExpertsData }>(endpoints.experts),
    getData<{ data: ICenterData }>(endpoints.center),
  ]);

  // All Static URLs with consistent metadata
  const staticUrls = [
    { path: "", priority: 1.0, changefreq: "daily" }, // Homepage
    { path: "about", priority: 0.8, changefreq: "monthly" },
    { path: "services", priority: 0.9, changefreq: "weekly" },
    { path: "contact", priority: 0.8, changefreq: "monthly" },
    { path: "blog", priority: 0.8, changefreq: "weekly" },
    { path: "international-client", priority: 0.7, changefreq: "monthly" },
    { path: "career", priority: 0.6, changefreq: "monthly" },
    { path: "our-clinic", priority: 0.8, changefreq: "weekly" },
    { path: "our-team", priority: 0.8, changefreq: "weekly" },
    { path: "faqs", priority: 0.7, changefreq: "monthly" },
    { path: "booking", priority: 0.9, changefreq: "daily" },
    { path: "terms", priority: 0.5, changefreq: "yearly" },
    { path: "privacy", priority: 0.5, changefreq: "yearly" },
    { path: "calculator", priority: 0.7, changefreq: "monthly" },
    { path: "ovulation-calculator", priority: 0.7, changefreq: "monthly" },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      
      <!-- Static URLs -->
      ${staticUrls
        .map(
          (url) => `
        <url>
          <loc>${siteurl}${url.path}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `
        )
        .join("")}

      <!-- Dynamic URLs -->
      ${serviceData?.records
        ?.map(
          (service) => `
        <url>
          <loc>${siteurl}services/${service.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `
        )
        .join("")}

      ${blogData?.records
        ?.map(
          (blog) => `
        <url>
          <loc>${siteurl}blog/${blog.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join("")}

      ${ourTeamData?.records
        ?.map(
          (member) => `
        <url>
          <loc>${siteurl}our-team/${member.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}

      ${centerData?.records
        ?.map(
          (clinic) => `
        <url>
          <loc>${siteurl}our-clinic/${clinic.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
