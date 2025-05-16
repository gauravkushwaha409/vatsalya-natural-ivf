"use client";
import { IBlogData } from "@/app/blog/interface/blog.interface";
import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import { IserviceData } from "@/app/services/interfaces/services.interface";
import { ICenterData } from "@/interface/center";
import {
  Briefcase,
  Calculator,
  Calendar,
  Clock,
  FileTerminal,
  FileText,
  Globe,
  HelpCircle,
  Home,
  Hospital,
  Info,
  Lock,
  MapPin,
  Newspaper,
  Phone,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
export function SitemapContent({
  serviceData,
  blogData,
  ourTeamData,
  centerData,
}: {
  serviceData: IserviceData["records"];
  blogData: IBlogData["records"];
  ourTeamData: IOurExpertsData["records"];
  centerData: ICenterData["records"];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const siteurl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Static pages with icons
  const staticPages = [
    { url: `${siteurl}`, label: "Home", icon: <Home className="w-4 h-4" /> },
    {
      url: `${siteurl}about`,
      label: "About",
      icon: <Info className="w-4 h-4" />,
    },
    {
      url: `${siteurl}service`,
      label: "Service",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      url: `${siteurl}contact`,
      label: "Contact",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      url: `${siteurl}blog`,
      label: "Blog",
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      url: `${siteurl}international-client`,
      label: "International Client",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      url: `${siteurl}career`,
      label: "Career",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      url: `${siteurl}our-clinic`,
      label: "Our Clinic",
      icon: <Hospital className="w-4 h-4" />,
    },
    {
      url: `${siteurl}our-team`,
      label: "Our Team",
      icon: <Users className="w-4 h-4" />,
    },
    {
      url: `${siteurl}faqs`,
      label: "FAQs",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      url: `${siteurl}booking`,
      label: "Booking",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      url: `${siteurl}terms`,
      label: "Terms",
      icon: <FileTerminal className="w-4 h-4" />,
    },
    {
      url: `${siteurl}privacy`,
      label: "Privacy",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      url: `${siteurl}calculator`,
      label: "Calculator",
      icon: <Calculator className="w-4 h-4" />,
    },
    {
      url: `${siteurl}ovulation-calculator`,
      label: "Ovulation Calculator",
      icon: <Clock className="w-4 h-4" />,
    },
  ];

  // Dynamic pages
  const serviceUrls =
    serviceData?.map((service) => ({
      url: `${siteurl}services/${service.slug}`,
      label: service.name || service.slug,
      category: "Services",
    })) || [];

  const blogUrls =
    blogData?.map((blog) => ({
      url: `${siteurl}blog/${blog.slug}`,
      label: blog.title || blog.slug,
      category: "Blog Posts",
    })) || [];

  const ourTeamUrls =
    ourTeamData?.map((member) => ({
      url: `${siteurl}our-team/${member.slug}`,
      label: member.name || member.slug,
      category: "Team Members",
    })) || [];

  const centerUrls =
    centerData?.map((center) => ({
      url: `${siteurl}our-clinic/${center.slug}`,
      label: center.name || center.slug,
      category: "Clinics",
    })) || [];

  const categories = [
    {
      name: "Main Pages",
      items: staticPages,
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Services",
      items: serviceUrls,
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Blog Posts",
      items: blogUrls,
      icon: <Newspaper className="w-5 h-5" />,
    },
    {
      name: "Team Members",
      items: ourTeamUrls,
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Clinics",
      items: centerUrls,
      icon: <Hospital className="w-5 h-5" />,
    },
  ];

  const filteredCategories = categories
    .map((category) => {
      const filteredItems = category.items.filter((item) =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...category, items: filteredItems };
    })
    .filter((category) => category.items.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="flex items-center gap-3 mb-4 font-semibold text-primary-300 text-3xl sm:text-4xl uppercase">
            Sitemap <div className="bg-primary-300 w-1/3 h-0.5" />
          </h1>
          <p className="mb-6 max-w-3xl text-lg">
            Explore all pages available on our website, organized by category
            for easy navigation.
          </p>
          <div className="relative max-w-lg">
            <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-primary-500" />
            </div>
            <input
              type="text"
              className="block bg-white/95 py-2 pr-3 pl-10 border border-primary-300 focus:border-primary-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-gray-900"
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {searchTerm && (
          <div className="mb-6">
            <div className="mb-2 text-gray-500 text-sm">
              {filteredCategories.reduce(
                (total, cat) => total + cat.items.length,
                0
              )}{" "}
              results found
            </div>
          </div>
        )}

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="flex items-center bg-gray-50 px-4 py-3 border-gray-200 border-b">
                <div className="mr-2 text-primary-600">{category.icon}</div>
                <h2 className="font-semibold text-gray-800">{category.name}</h2>
                <div className="bg-primary-100 ml-auto px-2 py-1 rounded-full text-primary-700 text-xs">
                  {category.items.length}
                </div>
              </div>
              <ul className="divide-y divide-gray-100">
                {category.items.map((item) => (
                  <li
                    key={item.url}
                    className="hover:bg-primary-50 transition-colors"
                  >
                    <a
                      href={item.url}
                      className="flex items-center gap-x-1.5 px-4 py-3 text-gray-700 hover:text-primary-600"
                    >
                      {/* {item.icon && (
                        <span className="mr-2 text-gray-500">{item.icon}</span>
                      )} */}
                      <span className="font-medium">{item.label}</span>
                      <MapPin className="ml-auto w-3 h-3 text-gray-400 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCategories.length === 0 && (
          <div className="py-12 text-center">
            <div className="flex justify-center items-center bg-gray-100 mx-auto mb-4 rounded-full w-24 h-24">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="mb-2 font-medium text-gray-900 text-lg">
              No pages found
            </h3>
            <p className="mx-auto max-w-md text-gray-500">
              We couldn&apos;t find any pages matching &quot;{searchTerm}
              &ldquo;. Try a different search term.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-primary-600 hover:bg-primary-700 mt-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-white"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-6 border-gray-200 border-t">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <p className="text-gray-500 text-sm text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
