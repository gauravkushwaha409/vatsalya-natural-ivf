import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getHomePageData = async () => {
  const safeFetch = async (endpoint: string) => {
    try {
      return await getData(endpoint);
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const homedata = await safeFetch(endpoints.home);
  const whatweOfferData = await safeFetch(endpoints.service);
  const howWeWorkData = await safeFetch(endpoints.howWorks);
  const expertsData = await safeFetch(endpoints.experts);
  const blogData = await safeFetch(endpoints.blog);
  const showcaseData = await safeFetch(endpoints.stats);
  const testimonialData = await safeFetch(endpoints.sucessStory);
  const homeGalleryData = await safeFetch(endpoints.homeGallery);
  const footerData = await safeFetch(endpoints.setting);
  const locationData = await safeFetch(endpoints.center);

  return {
    homedata,
    whatweOfferData,
    howWeWorkData,
    expertsData,
    blogData,
    showcaseData,
    testimonialData,
    homeGalleryData,
    footerData,
    locationData
  };
};
